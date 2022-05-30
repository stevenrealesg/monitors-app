import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/images/university-icon-white.svg'

function Sidebar() {
    const navigate = useNavigate()
    const user = JSON.parse(window.localStorage.getItem('loggedUserInfo')) || {names: ''}
    const handleSignOut = () => {
        window.localStorage.removeItem('loggedUserInfo')
        navigate('/login')
    }

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "250px", height: "100vh", position: "fixed" }}>
            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white">
                <img className="fs-4" src={logo} alt="" height={42} />
                <span className="fs-4">University</span>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <NavLink to='/app/list' className="nav-link text-white">
                        <i className="bi bi-people-fill me-2"></i>
                        Listar
                    </NavLink>
                    <NavLink to='/app/add' className="nav-link text-white">
                        <i className="bi bi-person-plus-fill me-2"></i>
                        Agregar
                    </NavLink>
                </li>
            </ul>
            <div className="dropdown">
                <span className="d-flex align-items-center text-white dropdown-toggle cursor-pointer" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-person-circle ms-2 me-2"></i>
                    <strong>{`${user.names}`}</strong>
                </span>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><span className="dropdown-item cursor-pointer" onClick={handleSignOut}>Cerrar sesión</span></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;