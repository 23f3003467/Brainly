import SidebarItem from "./sidebaritem"
import LogoIcon from "../icons/logo"
import X from "../icons/x"
import Youtube from "../icons/youtube"
import DocumentIcon from "../icons/documentIcon"

type SidebarFilter = "All" | "X" | "Youtube" | "DocumentIcon"

interface SidebarProps {
    activeFilter: SidebarFilter;
    onFilterChange: (filter: SidebarFilter) => void;
    onLogout: () => void;
}

export default function Sidebar({activeFilter,onFilterChange,onLogout}:SidebarProps){
    return (
        <div className="w-52 fixed border-r-2 bg-white z-2 border-gray-400 h-screen flex flex-col p-4 gap-2">
            <div className="text-2xl font-bold my-3 relative bottom-4 right-4">
                <SidebarItem StartIcon={<LogoIcon />} text="Brainly" />
            </div>
            <SidebarItem StartIcon={<svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 10 9-7 9 7M5 9v11h14V9M9 20v-6h6v6" /></svg>} text="Home" active={activeFilter === "All"} onClick={() => onFilterChange("All")} />
            <SidebarItem StartIcon={<X />} text="X" active={activeFilter === "X"} onClick={() => onFilterChange("X")} />
            <SidebarItem StartIcon={<Youtube />} text="YouTube" active={activeFilter === "Youtube"} onClick={() => onFilterChange("Youtube")} />
            <SidebarItem StartIcon={<DocumentIcon />} text="Docs" active={activeFilter === "DocumentIcon"} onClick={() => onFilterChange("DocumentIcon")} />
            <div className="mt-auto border-t border-gray-200 pt-3">
                <SidebarItem StartIcon={<svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 17l5-5-5-5M15 12H3m9-9h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-6" /></svg>} text="Log out" onClick={onLogout} />
            </div>
        </div>
    )

}