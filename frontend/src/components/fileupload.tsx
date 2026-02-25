import { useRef } from "react"
import { Button } from "./button"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Fileupload = () =>{
    const fileinputref = useRef<HTMLInputElement>(null)

    const handleclick = () => {
    fileinputref.current?.click() 
}


const filehandlechange = () =>{
    const files = Array.from(fileinputref.current?.files??[])

    files.forEach( async (file)=>{

        const formData = new FormData()
        formData.append("pdf" , file)

  const response = await axios.post(`${BACKEND_URL}/upload` , formData)

  console.log(response.data)

    })

}

return(
    <div>
        <input type="file" accept=".pdf" ref={fileinputref} onChange={filehandlechange} className="hidden" multiple />
        <Button variant="primary" size="md" text="Upload pdf" onClick={handleclick} ></Button>
    </div>
)

}
