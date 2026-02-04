import { Button } from "./button";
import { Input } from "./input";

export function Signin (){
    return(
        <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 ">
<Input placeholder="username"/>
<Input placeholder="password"/>

<Button variant="primary" size="md" text="sign-in" loading={false} />

        </div>
    )
}