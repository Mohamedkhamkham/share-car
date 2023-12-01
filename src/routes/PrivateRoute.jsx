import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/auth.context"
const PrivateRoute = () => {
    const { loggedUser, isLoading } = useContext(AuthContext)
    if (isLoading) {
        return <Loader />
    }
    if (!loggedUser) {
        return <Navigate to="/inicio-sesion" />
    }
    return <Outlet />
}
export default PrivateRoute