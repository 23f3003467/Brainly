import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <div className="logo">My App</div>

            <div className="flex space-x-4">
                <Link to="/signin" aria-current="page" className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font">
                    Sign In
                </Link>
                <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/5 hover:text-white">
                    Dashboard
                </Link>
                <Link to="/signin" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/5 hover:text-white">
                    Projects
                </Link>
                <Link to="/signin" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/5 hover:text-white">
                    Calendar
                </Link>
            </div>
        </nav>
    )
}