// import ShareIcon from "../icons/shareicon"
// import { useEffect } from "react"
import DeleteIcon from "../icons/deleteicon";
import Youtube from "../icons/youtube";
import X from "../icons/x"
import DocumentIcon from "../icons/documentIcon"
import { Tweet } from 'react-tweet';
import useDeleteContent from '../hooks/usedeletecontentapi'
interface CardProps {
    id:string;
    title: string;
    link: string;
    tag: keyof typeof titleTags;
}
const titleTags={
    "Youtube":<Youtube/>,
    "X":<X/>,
    "DocumentIcon":<DocumentIcon/>
}


export default function Card({ title, link, tag ,id }: CardProps) {
    
    async function handledelete(id:string){
        const delcont=useDeleteContent()
        delcont.mutate(id)
        
    }
    const getYoutubeEmbedUrl = (url: string) => {
        let videoId = ""
        
        // Handle youtube.com/embed/VIDEO_ID format
        if (url.includes("youtube.com/embed/")) {
            videoId = url.split("embed/")[1]?.split("?")[0] || ""
        }
        // Handle youtu.be/VIDEO_ID format (short link)
        else if (url.includes("youtu.be/")) {
            videoId = url.split("youtu.be/")[1]?.split("?")[0] || ""
        }
        // Handle youtube.com/watch?v=VIDEO_ID format
        else if (url.includes("watch?v=")) {
            videoId = url.split("v=")[1]?.split("&")[0] || ""
        }
        // Handle youtube.com/watch?v=VIDEO_ID&other_params format
        else if (url.includes("youtube.com") && url.includes("v=")) {
            videoId = url.match(/v=([a-zA-Z0-9_-]{11})/)?.[1] || ""
        }
        // Handle list parameter (playlist format)
        else if (url.includes("list=")) {
            videoId = url.match(/v=([a-zA-Z0-9_-]{11})/)?.[1] || ""
        }
        
        return videoId ? `https://www.youtube.com/embed/${videoId}` : url
    }

    return (
        <div className="flex flex-col gap-2 w-64 h-fit border-4 bg-white border-gray-200 border-r-3 p-2 rounded-xl">
            <div className="flex justify-between items-center">  
                <div className="flex justify-start items-center gap-0.5"> 
                    {titleTags[tag]}
                    <span className="text-md font-semibold">{title}</span>
                </div>
                <div className="flex justify-end items-center">  
                    <span onClick={()=>handledelete(id)}><DeleteIcon /></span>
                </div>
            </div>
            <div className="text-black relative max-h-96 overflow-y-scroll scrollbar-thumb-inherit text-2xs">
                {tag === "X" && <Tweet  id={link.split("/").pop() || ""} />} 
                {/* //removed the "https://x.com/" part from the link to get the tweet ID and also added style to root div of its api */}
                
                {tag === "Youtube" && <div className="relative w-full" style={{paddingBottom: "56.25%"}}><iframe src={getYoutubeEmbedUrl(link)} style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0}} allowFullScreen allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>}
            </div>
            <span className="bg-purple-400 text-white px-8 py-1 mt-2 rounded-3xl w-fi text-center"># {tag}</span>
        </div>
    )

}