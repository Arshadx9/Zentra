import { OpenAIEmbeddings, ChatOpenAI } from "@langchain/openai"
import { PineconeStore } from "@langchain/pinecone"
import { Pinecone } from "@pinecone-database/pinecone"
import { PromptTemplate } from "@langchain/core/prompts"
import { StringOutputParser } from "@langchain/core/output_parsers"
import { RunnableSequence, RunnablePassthrough } from "@langchain/core/runnables"
import { Document } from "@langchain/core/documents"


export const queryPdf = async (question: string) => {

    const pinecone = new Pinecone({
        apiKey: process.env.PINECONE_API_KEY!
    })

    const index = pinecone.index(process.env.PINECONE_INDEX!)

    const embeddings = new OpenAIEmbeddings({
        apiKey: process.env.OPENAI_API_KEY!,
        model: "text-embedding-3-small"
    })

    const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
        pineconeIndex: index
    })

    const retriever = vectorStore.asRetriever(3)

    const llm = new ChatOpenAI({
        apiKey: process.env.OPENAI_API_KEY!,
        model: "gpt-4o-mini",
        temperature: 0
    })

    const prompt = PromptTemplate.fromTemplate(`
        Answer the question based only on the following context:
        {context}
        
        Question: {question}
    `)

    const formatDocs = (docs: Document[]) => 
        docs.map(doc => doc.pageContent).join("\n\n")

    const chain = RunnableSequence.from([
        {
            context: retriever.pipe(formatDocs),
            question: new RunnablePassthrough()
        },
        prompt,
        llm,
        new StringOutputParser()
    ])

    const answer = await chain.invoke(question)

    return answer
}