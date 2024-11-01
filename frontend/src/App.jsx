import { Route, Routes } from "react-router-dom"
import Login from "./pages/authen/Login"
import Signup from "./pages/authen/Signup"
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
