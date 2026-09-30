import {  useRef } from "react"
import Input from "./input"
import CloseIcon from "../icons/closeicon"
import Button from "./button"
import useCreateContentApi from "../hooks/usecreatecontentapi"
// import { useMutation } from "@tanstack/react-query"
export default function ContentModal({ isOpen, OnClose }: { isOpen: boolean, OnClose: () => void }) {
  const titleRef = useRef<HTMLInputElement>(null)
  const linkRef = useRef<HTMLInputElement>(null)
  const tagRef = useRef<HTMLSelectElement>(null)
  const createContent = useCreateContentApi()
  

  async function handleSubmit(){
        const title = titleRef.current?.value ?? ""
        const link = linkRef.current?.value ?? ""
        const type = tagRef.current?.value ?? ""

        await createContent.mutate({
            title,
            link,
            type,
        });
        OnClose()

  }
  





    return (
        isOpen ? <div className="w-screen h-screen fixed left-0 top-0 z-2 flex justify-center items-center  bg-transparent">
                <div >
                        <span className="bg-white flex flex-col gap-3 items-center relative py-10 border border-purple-600 rounded-xl w-2xl h-2xl" >
                            <span className="absolute top-2 right-5 " onClick={OnClose}>
                               <CloseIcon/>
                            </span>

                            <h1>ADD CONTENT</h1>
                            <Input placeholder="Title" reference={titleRef} />
                            <Input placeholder="Link" reference={linkRef}/>
                            <label className="self-center text-sm font-medium text-gray-700 align-baseline text-center">Tag</label>

                            <select ref={tagRef} className="w-1/4 rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:border-purple-500">
                                <option value="x">X</option>
                                <option value="youtube">Youtube</option>
                                <option value="docs">Docs</option>
                            </select>

                            <Button variant="primary" text="Submit" onClick={handleSubmit} />
                        </span>
                </div>
            </div> : null
    )

}
