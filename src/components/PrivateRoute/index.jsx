import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"

export const PrivateRoute = ({ redirect = '/' }) => {
    const { user } = useAuth()
    console.log(user)
    if (!user) return <Navigate to={redirect}/>

    return <Outlet />
}