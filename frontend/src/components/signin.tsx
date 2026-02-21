import axios from "axios";
import { Button } from "./button";
import { Input } from "./input";
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


export function Signin (){


const usernameRef = useRef<HTMLInputElement>()
const passwordRef = useRef<HTMLInputElement>()
  const navigate = useNavigate();



async function signin(){
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try{
const response = await axios.post(`${BACKEND_URL}/api/v1/signin` , {
    username , 
    password
})

  console.log(response.data)
  const jwt = response.data["your token"];

localStorage.setItem("token",jwt)


navigate('/dashboard')

}
    catch(error){
       console.error("the error : " , error)
        alert('signin failed')
    }
}


    return(
        <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 bg-black">
<Input ref={usernameRef} placeholder="username" className="border p-2 font-mono  text-white" />
<Input ref={passwordRef}   placeholder="password" className="border p-2 font-mono text-white" />

<Button onClick={signin} variant="primary" size="md" text="sign-in" loading={false} />

        </div>
    )
}