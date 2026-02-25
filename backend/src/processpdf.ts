import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf"
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters"

export const processPdf = async (filepath: string) => {

    const loader = new PDFLoader(filepath)
    const docs = await loader.load()


    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 150
    })

    const chunks = await splitter.splitDocuments(docs)

    console.log(`total chunks: ${chunks.length}`)
    console.log(`first chunk: ${chunks[0].pageContent}`)

    return chunks
}
