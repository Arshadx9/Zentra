import { useEffect, useState } from 'react'
import { Button } from '../components/button'
import { Card } from '../components/card'
import { Createpop } from '../components/contentpop'
import { useContent } from '../hooks/useContent'
import { Fileupload } from '../components/fileupload'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const Dashboard = () => {

  const [upload , setUpload] = useState()
  const token = localStorage.getItem("token")
  const navigate = useNavigate

  useEffect( () => {
axios.get("http://localhost:3001/uploads" , {

headers: {
  authorization:token
}

})
.then((response)=>{
  setUpload(response.data.uploads)
})

  },[] )


  const [modalOpen, setModalOpen] = useState(false)
  const contents = useContent()

  return (
    <div className='bg-black min-h-screen' >
      <Createpop open={modalOpen} onClose={() => setModalOpen(false)} />

      <div className="flex gap-4 p-4">
        <Button variant="primary" size="md" text="Add Content" onClick={() => setModalOpen(true)} />
      <Fileupload/>

      </div>

      <div className='flex flex-wrap'>
        {contents.map(({ title, link }, index: number) => (
          <Card key={index} title={title} link={link} />
        ))}
      </div>

{upload.map( (upload)=>{
<div key={upload._id}>

  <p>{upload.Originalname} </p>
  <button onClick={() => navigate(`/chat/${upload._id}`)} >Ask question </button>

</div>
}
)}

    </div>
  )
}

export default Dashboard