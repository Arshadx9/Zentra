import { OpenAIEmbeddings } from "@langchain/openai"
import { PineconeStore } from "@langchain/pinecone"
import { Pinecone } from "@pinecone-database/pinecone"
import { Document } from "langchain"

export const embedandstore = async (chunks : Document[]) =>{
 
const pinecone = new Pinecone({
    apiKey:process.env.PINECONE_API_KEY!

})

const index = pinecone.index(process.env.PINECONE_INDEX!)


const embeddings = new OpenAIEmbeddings({
    apiKey:process.env.OPENAI_API_KEY!,
        model: "text-embedding-3-small"
})


await PineconeStore.fromDocuments(chunks , embeddings ,{
    pineconeIndex:index
})

console.log(`stored ${chunks.length} chunks in pinecone`)
}