import { Button } from "./button"
import { useNavigate } from "react-router-dom"

export function Landing(){
    const navigate = useNavigate()
    return(
        
        <div className="bg-black  h-screen text-white flex flex-col justify-center items-center gap-4 ">
<h1 className="font-semibold text-7xl tracking-tighter font-sans " >Welcome to "talk2it"</h1>
<p className="font-light mb-6 ">one place to store and chat with your content</p>

<div className="flex gap-3.5">
 <Button onClick={()=>{
navigate('/signup')
      }} variant="primary" size="md" text="sign-up" loading={false}  />

      <Button onClick={()=>{
navigate('/signin')
      }} variant="primary" size="md" text="sign-in" loading={false} />
</div>

     


        </div>
    )
}
