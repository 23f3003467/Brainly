import React from "react";


interface itemprops{
    StartIcon?: React.ReactNode;
    text:string

}


export default function SidebarItem({StartIcon,text}:itemprops){
    return (<div className="flex gap-2 mx-2 items-center">
        {StartIcon}
        {text}
    </div>)
}