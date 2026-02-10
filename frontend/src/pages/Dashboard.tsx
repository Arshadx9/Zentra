import { useState } from 'react'
import { Button } from '../components/button'
import { Card } from '../components/card'
import { Createpop } from '../components/contentpop'
import { Plusicon } from '../icons/plusicon'
import { Shareicon } from '../icons/shareicon'
import { useContent } from '../hooks/useContent'

export const Dashboard = () => {

  const [modalOpen , setModalOpen] = useState(false)
const contents = useContent()
  return (
    <div className=" ">
      <Createpop open={modalOpen} onClose={()=>{
        setModalOpen(false)
      }} />
      <div className="flex gap-4 m-5">
        
        <Button 
          variant="primary" 
          size="md" 
          text="Primary Button" 
         onClick={()=>{
          setModalOpen(true)
         }}
          startIcon={<Plusicon></Plusicon>}
        />
        
        <Button 
          variant="secondary" 
          size="md" 
          text="Secondary Button" 
    
          startIcon={<Shareicon></Shareicon>}
        />

      </div>
      <div className='flex'>
         <Card type="twitter" link="https://x.com/VeryAI/status/2018416157796049387" title="first post" /> 
      <Card type="youtube" link="https://youtu.be/XZLYkw_eWlc?si=yq2Xbf8x8nHnJSwV" title="second post" /> 
      </div>
     

    </div>
    
  )
}

export default Dashboard