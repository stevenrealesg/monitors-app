import { Navigate, useLocation } from "react-router-dom";

function RequirePermissions({ children }) {
    const location = useLocation()
    const user = JSON.parse(window.localStorage.getItem('loggedUserInfo'))
    return user ? children : <Navigate to="/login" state={{ from: location }} />
}

export default RequirePermissions;