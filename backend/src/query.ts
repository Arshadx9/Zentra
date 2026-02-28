import { OpenAIEmbeddings } from "@langchain/openai"
import { Pinecone } from "@pinecone-database/pinecone"

export const queryPDf = () => {


const pincone = new Pinecone({
    apiKey:process.env.PINECONE_API_KEY!
})

const index = pincone.index(process.env.PINECONE_INDEX!)

const embeddings = new OpenAIEmbeddings({
    apiKey : process.env.OPENAI_API_KEY!,
    model:"text-embedding-3-small"
})

}