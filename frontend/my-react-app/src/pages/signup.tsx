import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../component/input"
import Button from "../component/button"
import {Url} from "../config"
export default function SignUp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSignUp() {
        if (!username || !password) {
            alert("Please fill in all fields")
            return
        }

        setLoading(true)
        try {
            console.log(Url)
            const response = await fetch(Url+"/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            })
            const data= await response.json()

            if (response.ok) {
                console.log(data,response)
                navigate("/signin")
            } else {
                response.status==409 ? alert(`${data}`) : alert("Server down please try again later") 
                
            }
        } catch (error) {
            console.error("Signup error:", error)
            alert("An error occurred. Please try again.")
            
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col gap-2 justify-center border-2 border-gray-400 rounded p-4">
              <span className="p-2 font-bold text-2xl">SignUp</span>
            <Input styleType="primary" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input styleType="primary" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button variant="primary" text={loading ? "Loading..." : "Sign-Up"} onClick={handleSignUp} fullwidth={true} cursor={true} disabled={loading}></Button>
            </div>
        </div>
    )
}