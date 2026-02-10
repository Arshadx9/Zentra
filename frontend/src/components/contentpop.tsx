import { Crossicon } from "../icons/crossicon";
import { Button } from "./button";
import { Input } from "./input";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios"; 

interface createpopprops {
    open? : boolean;
    onClose? : () => void;
    
}

export function Createpop({ open, onClose }: createpopprops) {

    const titleref = useRef<HTMLInputElement>()
    const linkref = useRef<HTMLInputElement>()

  async function addContent (){
    const title = titleref.current?.value;
    const link = linkref.current?.value;

    // 👇 ADDED LINE (only addition)
    const token = localStorage.getItem("token");
    console.log("TOKEN SENT:", token);

    await axios.post(`${BACKEND_URL}/api/v1/content`, {
      title,
      link,
    } ,{
        headers:{
             "authorization" : token
        }
    })
   }
   
    if (!open) return null;  
    
    return (
        <div className="fixed inset-0 flex justify-center items-center">
            <div className="absolute inset-0 bg-slate-200 opacity-20 "></div>
            
            <div className="relative z-10 p-4 w-64 h-52 bg-white shadow-2xl rounded-md flex flex-col justify-center items-center gap-7 ">
                
                <div className="flex justify-end absolute top-2 right-2" onClick={onClose}>
                    <Crossicon/>
                </div>
   
               <div className="gap-4 flex flex-col mt-3 ">
               <Input ref={titleref} placeholder={"Title"} />
               <Input ref={linkref} placeholder={"Link"} />
               </div>
               <Button variant="primary" size="sm" text="Submit" onClick={()=>{
                 console.log("BUTTON CLICKED");
                   addContent();
               }} />
            </div>
        </div>
    );
}