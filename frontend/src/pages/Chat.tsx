import { useRef, useState } from "react"
import { Input } from "../components/input"
import axios from "axios"
import { Button } from "../components/button"
export const Chat = ()=>{
      const token = localStorage.getItem("token")


const inputRef =  useRef<HTMLInputElement | null>(null)
const[answer , setanswer] = useState("")


 async function sendques (){

     const question = inputRef.current?.value;

     const response = await axios.post("http://localhost:3001/ask" , { question:question}
       
        ,  {
        headers :{
            authorization : token
        } 
     })
     setanswer(response.data.answer)

}


return(
    <div className="bg-black min-h-screen flex flex-col items-center gap-4 p-4">
    <Input ref={inputRef} placeholder="ask question" className="border p-2 font-mono w-4xl  text-white" />
          <Button onClick={sendques} variant="primary" size="md" text="send question" loading={false} />
    {answer && <p className="text-white">{answer}</p>}
    </div>
)


}