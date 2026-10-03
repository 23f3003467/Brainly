
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Dashboard from './pages/dashboard'
import Home from './pages/home'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function ProtectedDashboard() {
  return localStorage.getItem("token") ? <Dashboard /> : <Navigate to="/signin" replace />
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<ProtectedDashboard />} />
      </Routes>
    </Router>
    </QueryClientProvider>
  )
}

export default App
