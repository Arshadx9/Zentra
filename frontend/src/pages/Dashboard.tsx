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
        {contents.map(({ title, link }: any, index: number) => {
          let type: "youtube" | "twitter" | undefined = undefined;
          
          if (typeof link === "string") {
            if (link.includes("youtu.be") || link.includes("youtube.com")) {
              type = "youtube";
            } else if (link.includes("x.com") || link.includes("twitter.com")) {
              type = "twitter";
            }
          }

          return (
            <Card
              key={index}
              link={link}
              title={title}
              type={type}
            />
          );
        })}
      </div>
     

    </div>
    
  )
}

export default Dashboard