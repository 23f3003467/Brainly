import React from "react";


interface itemprops{
    StartIcon?: React.ReactNode;
    text:string;
    active?: boolean;
    onClick?: () => void;

}


export default function SidebarItem({StartIcon,text,active=false,onClick}:itemprops){
    const className = `flex gap-2 mx-2 items-center w-full rounded-md px-2 py-2 text-left ${active ? "bg-slate-100 text-slate-900 font-semibold" : "text-gray-600 hover:bg-slate-50"}`

    if (!onClick) {
        return <div className={className}>{StartIcon}{text}</div>
    }

    return (
        <button type="button" className={className} onClick={onClick} aria-pressed={active}>
            {StartIcon}
            {text}
        </button>
    )
}