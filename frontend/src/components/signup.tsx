import { Button } from "./button";
import { Input } from "./input";

export function Signup (){
    return(
        <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 ">
<Input placeholder="username"/>
<Input placeholder="password"/>

<Button variant="primary" size="md" text="sign-up" loading={false} />

        </div>
    )
}