import { useRef } from "react"
import { Button } from "./button"

export const Fileupload = () =>{
    const fileinputref = useRef<HTMLInputElement>(null)

    const handleclick = () => {
    fileinputref.current?.click() 
}


const filehandlechange = () =>{
    const files = Array.from(fileinputref.current?.files??[])

    files.forEach(file => {
        console.log(file.name)
       
    })
}

return(
    <div>
        <input type="file" accept=".pdf" ref={fileinputref} onChange={filehandlechange} className="hidden" />
        <Button variant="primary" size="md" text="sign-in" onClick={handleclick} ></Button>
    </div>
)

}
