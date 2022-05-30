import '../styles/login.css'
import logo from '../assets/images/university-icon.svg'
import { useEffect, useState } from 'react';
import login from '../services/login';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [authenticated, setAuthenticated] = useState(true)

    const handleChangeUser = ({ target }) => setUser(target.value)
    const handleChangePassword = ({ target }) => setPassword(target.value)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await login({ user, password })
            window.localStorage.setItem('loggedUserInfo', JSON.stringify(res))
            setAuthenticated(true)
            navigate('/app')
        } catch (error) {
            setAuthenticated(false)
        }
    }

    useEffect(() => {
        window.localStorage.getItem('loggedUserInfo') && navigate('/app')
    }, [])

    return (
        <main className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
            <div className="form-signin text-center">
                <form onSubmit={handleSubmit}>
                    <img className="mb-4" src={logo} alt="" height={100} />
                    <h1 className="h3 mb-3 fw-normal">Iniciar sesión</h1>

                    {!authenticated &&
                        <div className="alert alert-danger d-flex align-items-center" role="alert">
                            <i className="bi bi-exclamation-diamond-fill me-2"></i>Usuario o contraseña incorrecta.
                        </div>
                    }

                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            name="user"
                            placeholder='Usuario'
                            onChange={handleChangeUser}
                        />
                        <label>Usuario</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder='Contraseña'
                            onChange={handleChangePassword}
                        />
                        <label>Contraseña</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-dark" type="submit">Ingresar</button>
                    <p className="mt-5 mb-3 text-muted">Derechos reservados. &copy; 2022</p>
                </form>
            </div>
        </main>
    );
}

export default Login;