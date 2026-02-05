import { Button } from "./button";
import { Input } from "./input";
import { useRef } from "react";
import axios from "axios";
import {BACKEND_URL} from "../config"

export function Signup (){

const usernameRef = useRef<HTMLInputElement>();
 const passwordRef = useRef<HTMLInputElement>();

  async function signup(){
   const username = usernameRef.current?.value;
      const password = usernameRef.current?.value;
     await axios.post(`${BACKEND_URL}`, {
        data : 
        username,
        password
      })
 }

    return(
        <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 ">
<Input ref={usernameRef} placeholder="username"/>
<Input ref={passwordRef}  placeholder="password"/>

<Button onClick={signup} variant="primary" size="md" text="sign-up" loading={false} />

        </div>
    )
}