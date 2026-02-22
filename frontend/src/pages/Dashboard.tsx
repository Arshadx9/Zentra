import { useState } from 'react'
import { Button } from '../components/button'
import { Card } from '../components/card'
import { Createpop } from '../components/contentpop'
import { useContent } from '../hooks/useContent'
import { Fileupload } from '../components/fileupload'

export const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const contents = useContent()

  return (
    <div className='bg-black min-h-screen' >
      <Createpop open={modalOpen} onClose={() => setModalOpen(false)} />

      <div className="flex gap-4 p-4">
        <input type="file" className='bg-white'  />
        <Button variant="primary" size="md" text="Add Content" onClick={() => setModalOpen(true)} />
      <Fileupload/>

      </div>

      <div className='flex flex-wrap'>
        {contents.map(({ title, link }, index: number) => (
          <Card key={index} title={title} link={link} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard