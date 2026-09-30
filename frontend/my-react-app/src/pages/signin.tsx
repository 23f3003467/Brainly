import Input from "../component/input"
import Button from "../component/button"
import axios from "axios"
import { Url  } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "../component/loading"


export default function SignIn() {

    const navigate = useNavigate()
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [loading,setLoading]=useState(false)


    async function handleSignIn() {
        if (!username || !password) return
        setLoading(true)
        try {
            const res = await axios.post(`${Url}/api/signin`, { username, password })
            console.log('signin response', res.data)
            if (res.data?.token) {
                localStorage.setItem("token", res.data.token)
                navigate("/dashboard")
            }
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }
    if(loading){
      return <Loading/>
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col gap-2 justify-center border-2 border-gray-400 rounded p-4">
              <span className="p-2 font-bold text-2xl">SignIn</span>
            <Input styleType="primary" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
            <Input styleType="primary" placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <Button variant="primary" text="Sign-In" loading={loading} onClick={handleSignIn} fullwidth={true}></Button>
            </div>
        </div>
    )
}