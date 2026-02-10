import { useEffect , useState} from "react"
import axios from "axios"

export function useContent (){
    const [contents , setContents] = useState([])

useEffect(()=>{
  axios.get(`${BACKEND_URL}/api/v1/content`, {
    headers : {
         "authorisation" : localStorage.getItem("token")
    }
  })
  .then((response)=>{
setContents(response.data.content)
  })
}, [])

    return contents 
}