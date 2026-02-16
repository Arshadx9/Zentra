import { Button } from "./button"
import { useNavigate } from "react-router-dom"

export function Landing(){
    const navigate = useNavigate()
    return(
        
        <div className="bg-black font-mono h-screen text-white flex flex-col justify-center items-center gap-4 ">
<h1>Welcome to "talk to your pdf/links"</h1>

      <Button onClick={()=>{
navigate('/signup')
      }} variant="primary" size="sm" text="sign-up" loading={false}  />

      <Button onClick={()=>{
navigate('/signin')
      }} variant="primary" size="sm" text="sign-in" loading={false} />


        </div>
    )
}
