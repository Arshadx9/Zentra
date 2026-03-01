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
    <div className="bg-black">
    <Input ref={inputRef} placeholder="username" className="border p-2 font-mono  text-white" />
          <Button onClick={sendques} variant="primary" size="md" text="sign-up" loading={false} />
    {answer && <p className="text-white">{answer}</p>}
    </div>
)


}