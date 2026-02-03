import { Crossicon } from "../icons/crossicon";
import { Button } from "./button";

interface createpopprops {
    open : boolean;
    onClose : () => void;
    placeholder : string;
}

export function Createpop({ open, onClose }: createpopprops) {
    if (!open) return null;  
    
    return (
        <div className="fixed inset-0 flex justify-center items-center">
            <div className="absolute inset-0 bg-amber-100 opacity-20"></div>
            
            <div className="relative z-10 p-4 w-64 h-52 bg-white shadow-md rounded-md flex flex-col justify-center items-center gap-7">
                
                <div className="flex justify-end absolute top-2 right-2" onClick={onClose}>
                    <Crossicon/>
                </div>
   
               <div className="gap-4 flex flex-col mt-3">
               <Input placeholder={"Title"} />
               <Input placeholder={"Link"} />
               </div>
    <Button variant="primary" size="sm" text="Submit" onClick={()=>{}} />


            </div>
        </div>
    );
}

function Input({ placeholder} : createpopprops ){
    return(
        <div>
            <input type="text" placeholder={placeholder} onChange={onchange} className="px-4 py-2 box-border shadow-md" />
        </div>
    )
}