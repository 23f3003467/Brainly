import Input from "../component/input"
import Button from "../component/button"
import axios from "axios"
import { Url  } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "../component/loading"
import PublicNavbar from "../component/publicnavbar"


export default function SignIn() {

    const navigate = useNavigate()
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState("")


    async function handleSignIn() {
        if (!username || !password) return
        setError("")
        setLoading(true)
        try {
            const res = await axios.post(`${Url}/api/signin`, { username, password })
            console.log('signin response', res.data)
            if (res.data?.token) {
                localStorage.setItem("token", res.data.token)
                navigate("/dashboard")
            } else {
                setError("Sign-in failed. Please try again.")
            }
        } catch (err) {
            setError(axios.isAxiosError(err)
                ? err.response?.status === 401
                    ? "Invalid username or password."
                    : err.response
                        ? "Sign-in failed. Please try again."
                        : "Cannot reach the server. Please try again later."
                : "Sign-in failed. Please try again.")
        } finally {
            setLoading(false)
        }
    }
    if(loading){
            return <><PublicNavbar/><Loading/></>
    }
    return (
                <main className="min-h-screen bg-gray-100">
                <PublicNavbar />
                <div className="flex flex-col items-center justify-center min-h-[calc(100svh-73px)]">
            <div className="flex flex-col gap-2 justify-center border-2 border-gray-400 rounded p-4">
              <span className="p-2 font-bold text-2xl">SignIn</span>
            <Input styleType="primary" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
            <Input styleType="primary" placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                        {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
            <Button variant="primary" text="Sign-In" loading={loading} onClick={handleSignIn} fullwidth={true}></Button>
            </div>
        </div>
        </main>
    )
}