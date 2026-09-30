import Button from '../component/button'
import PlusIcon from '../icons/plusicon'
import ShareIcon from '../icons/shareicon'
import Cards from '../component/card'
import ContentModal from '../component/contentmodal'
import useGetContent from '../hooks/usegetcontentapi'
import { useState } from 'react'
import Sidebar from '../component/sidebar'


export default function Dashboard() {
    let [isOpen,setisOpen] = useState(false);
    let {data}=useGetContent()

    return (
       <>
      <Sidebar/>
      <div className='ml-52 bg-slate-200 h-screen'>
      {isOpen && <ContentModal isOpen={true} OnClose={() => setisOpen(false)} />}
      <div className='flex justify-end py-2'>
        <Button variant="primary" text="Share Brain" StartIcon={<ShareIcon />}/>
        <Button variant="secondary" text="Add Content" onClick={()=>setisOpen(true)} StartIcon={<PlusIcon />}/>
      </div>
      
      <div className="flex flex-wrap gap-4 p-4">
          {data?.map(({id,title, link, tag}:{title:string, link:string, tag:any,id:string}) => (
            <Cards key={link ?? title} title={title} link={link} tag={tag} id={id} />
          ))}
          
      </div>
      </div>
    </>
    )
}
