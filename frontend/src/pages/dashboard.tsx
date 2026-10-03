import Button from '../component/button'
import PlusIcon from '../icons/plusicon'
import ShareIcon from '../icons/shareicon'
import Cards from '../component/card'
import ContentModal from '../component/contentmodal'
import useGetContent from '../hooks/usegetcontentapi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../component/sidebar'

type ContentFilter = "All" | "X" | "Youtube" | "DocumentIcon"
type ContentTag = Exclude<ContentFilter, "All">

export default function Dashboard() {
    const [isOpen,setIsOpen] = useState(false)
    const [activeFilter,setActiveFilter] = useState<ContentFilter>("All")
    const {data}=useGetContent()
    const navigate = useNavigate()
    const filteredContent = data?.filter(({tag}:{tag:string}) => activeFilter === "All" || tag === activeFilter)

    function handleLogout() {
      localStorage.removeItem("token")
      navigate("/")
    }

    return (
       <>
      <Sidebar activeFilter={activeFilter} onFilterChange={setActiveFilter} onLogout={handleLogout}/>
      <div className='ml-52 bg-slate-200 h-screen'>
      {isOpen && <ContentModal isOpen={true} OnClose={() => setIsOpen(false)} />}
      <div className='flex justify-end py-2'>
        <Button variant="primary" text="Share Brain" StartIcon={<ShareIcon />}/>
        <Button variant="secondary" text="Add Content" onClick={()=>setIsOpen(true)} StartIcon={<PlusIcon />}/>
      </div>
      
      <div className="flex flex-wrap gap-4 p-4">
          {filteredContent?.map(({id,title, link, tag}:{title:string, link:string, tag:ContentTag,id:string}) => (
            <Cards key={link ?? title} title={title} link={link} tag={tag} id={id} />
          ))}
          
      </div>
      </div>
    </>
    )
}
