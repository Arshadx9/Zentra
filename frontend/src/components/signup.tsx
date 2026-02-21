import { Button } from "./button";
import { Input } from "./input";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password
      });
      console.log(response.data);
navigate('/signin')

    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed!");
    }
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 bg-black">
      <Input ref={usernameRef} placeholder="username"  className="border text-white p-2 font-mono  "/>
      <Input ref={passwordRef} placeholder="password "  className="border text-white p-2 font-mono " />
      <Button onClick={signup} variant="primary" size="md" text="sign-up" loading={false} />
    </div>
  );
}