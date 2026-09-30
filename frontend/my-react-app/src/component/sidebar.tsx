import SidebarItem from "./sidebaritem"
import LogoIcon from "../icons/logo"
import X from "../icons/x"
import Youtube from "../icons/youtube"
import DocumentIcon from "../icons/documentIcon"

export default function Sidebar(){
    return (
        <div className="w-52 fixed border-r-2 bg-white z-2 border-gray-400 h-screen flex flex-col p-4 gap-2">
            <div className="text-2xl font-bold my-3 relative bottom-4 right-4">
                <SidebarItem StartIcon={<LogoIcon />} text="Brainly" />
            </div>
            <SidebarItem StartIcon={<X />} text="X" />
            <SidebarItem StartIcon={<Youtube />} text="YouTube" />
            <SidebarItem StartIcon={<DocumentIcon />} text="Docs" />
        </div>
    )

}