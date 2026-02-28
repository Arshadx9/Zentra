import { Signup } from "./components/signup"
import { BrowserRouter, Routes , Route } from "react-router-dom"
import { Signin } from "./components/signin"
import Dashboard from "./pages/Dashboard"
import { Landing } from "./components/landing"
import { Chat } from "./pages/Chat"

const App = () => {
  return(
    <div>
      <BrowserRouter>
      <Routes>

<Route path="/" element={<Landing/>} />
<Route path="/signup" element={<Signup/>} />
<Route path="/signin" element={<Signin/>} />
<Route path="/dashboard" element={<Dashboard/>} />
<Route path="/chat/:uploadId" element={<Chat/>} />



      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App