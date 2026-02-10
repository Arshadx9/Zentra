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
        {
          contents.map(({title, link})=>
         <Card link={link} title={title} />
         )
        }
      </div>
     

    </div>
    
  )
}

export default Dashboard