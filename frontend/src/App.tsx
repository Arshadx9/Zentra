import { Signup } from "./components/signup"
import { BrowserRouter, Routes , Route } from "react-router-dom"
import { Signin } from "./components/signin"
import Dashboard from "./pages/Dashboard"

const App = () => {
  return(
    <div>
      <BrowserRouter>
      <Routes>

<Route path="/signup" element={<Signup/>} />
<Route path="/signin" element={<Signin/>} />
<Route path="/dashboard" element={<Dashboard/>} />




      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App