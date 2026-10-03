import { Link } from "react-router-dom"
import LogoIcon from "../icons/logo"

export default function PublicNavbar() {
    return (
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-slate-700 no-underline">
                <LogoIcon />
                Brainly
            </Link>
            <nav aria-label="Account" className="flex items-center gap-3">
                <Link to="/signin" className="px-3 py-2 text-slate-700 no-underline hover:text-slate-950">Sign in</Link>
                <Link to="/signup" className="rounded bg-purple-500 px-4 py-2 text-white no-underline hover:bg-purple-400">Sign up</Link>
            </nav>
        </header>
    )
}