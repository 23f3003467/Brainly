import { Link } from "react-router-dom"
import PublicNavbar from "../component/publicnavbar"

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <PublicNavbar />
            <section className="mx-auto flex min-h-[calc(100svh-73px)] max-w-5xl flex-col justify-center px-6 py-16">
                <p className="mb-3 text-sm font-semibold uppercase text-purple-500">Your personal knowledge space</p>
                <h1 className="mb-5 max-w-2xl text-4xl font-bold leading-tight text-slate-950">Keep the things worth remembering in one place.</h1>
                <p className="mb-8 max-w-xl text-lg text-slate-600">Save and organize videos, posts, and documents so your favorite ideas are easy to find again.</p>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link to="/signup" className="rounded bg-purple-500 px-5 py-3 font-medium text-white no-underline hover:bg-purple-400">Create your account</Link>
                    <Link to="/signin" className="rounded border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 no-underline hover:bg-slate-100">Sign in</Link>
                </div>
            </section>
        </main>
    )
}