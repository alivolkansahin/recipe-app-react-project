import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({element}) => {
    const {isAuthenticated} = useContext(AuthContext)

    return isAuthenticated ? element : <Navigate to="/login"/>
}

export default PrivateRoute;