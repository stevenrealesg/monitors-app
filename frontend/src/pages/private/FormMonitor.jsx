import { useEffect, useState } from "react";
import serviceMonitor from "../../services/monitor";

function FormMonitor({ setGetAgain, userToUpdate }) {

    const [names, setNames] = useState("");
    const [last_names, setLastNames] = useState("");
    const [dni, setDni] = useState("");
    const [academy_program, setAcademyProgram] = useState("");
    const [semester, setSemester] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [saved, setSaved] = useState(false)

    useEffect(() => {
        if (saved) {
            setTimeout(() => {
                setSaved(false)
            }, 5000);
        }
    }, [saved])

    useEffect(() => {
        if (userToUpdate) {
            setNames(userToUpdate.names)
            setLastNames(userToUpdate.last_names)
            setDni(userToUpdate.dni.toString())
            setAcademyProgram(userToUpdate.academy_program)
            setEmail(userToUpdate.email)
            setPhone(userToUpdate.phone)
            setSemester(userToUpdate.semester.toString())
        }
    }, [userToUpdate])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const error = getError()
        if (!error) {
            const created = await serviceMonitor.save({
                names,
                last_names,
                email,
                phone,
                academy_program,
                semester,
                dni,
                user,
                password
            })
            if (created) {
                setSaved(true)
                resetForm()
            }
        } else {
            setError(error)
        }
    }

    const handleUpdate = async (event) => {
        event.preventDefault()
        const error = getError()
        if (!error) {
            const created = await serviceMonitor.update(userToUpdate.id, {
                names,
                last_names,
                email,
                phone,
                academy_program,
                semester,
                dni
            })
            if (created) {
                setGetAgain(prev => !prev)
                setSaved(true)
            }
        } else {
            setError(error)
        }
    }

    const handlechangeNames = (event) => { setNames(event.target.value) }
    const handlechangeLastNames = (event) => { setLastNames(event.target.value) }
    const handlechangeDni = (event) => { setDni(event.target.value) }
    const handlechangeAcademyProgram = (event) => { setAcademyProgram(event.target.value) }
    const handlechangeSemester = (event) => { setSemester(event.target.value) }
    const handlechangeEmail = (event) => { setEmail(event.target.value) }
    const handlechangePhone = (event) => { setPhone(event.target.value) }
    const handlechangeUser = (event) => { setUser(event.target.value) }
    const handlechangePassword = (event) => { setPassword(event.target.value) }

    const getError = () => {
        if (!dni.trim()) {
            return "Debe ingresar el documento de identificación"
        }

        if (!names.trim()) {
            return "Debe ingresar nombre"
        }
        if (!last_names.trim()) {
            return "Debe ingresar apellidos"
        }
        if (!academy_program.trim()) {
            return "Debe ingresar el programa académico"
        }
        if (!semester.trim()) {
            return "Debe ingresar el semestre"
        }
        if (!email.trim()) {
            return "Debe ingresar el correo"
        }
        if (!phone.trim()) {
            return "Debe ingresar el teléfono"
        }
        
        if (!userToUpdate && !user.trim()) {
            return "Debe ingresar el usuario"
        }
        if (!userToUpdate && !password.trim()) {
            return "Debe ingresar la contraseña"
        }

        return null
    }

    const resetForm = () => {
        setNames("")
        setLastNames("")
        setDni("")
        setAcademyProgram("")
        setSemester("")
        setEmail("")
        setPhone("")
        setUser("")
        setPassword("")
        setError(null)
    }

    return (
        <form className="row justify-content-md-center p-2" onSubmit={handleSubmit}>
            <div className="col-sm-12 col-md-8 col-lg-6">
                <div className="card mb-3">
                    <div className="card-header">
                        <h5 className="card-title"><i className="bi bi-person-fill"></i> Datos personales</h5>
                    </div>

                    <div className="card-body">
                        <div className="mb-3">
                            <label className="form-label">Documento de identificación:</label>
                            <input type="text" className="form-control" value={dni} onChange={handlechangeDni} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nombres:</label>
                            <input type="text" className="form-control" value={names} onChange={handlechangeNames} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Apellidos:</label>
                            <input type="text" className="form-control" value={last_names} onChange={handlechangeLastNames} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Programa académico:</label>
                            <input type="text" className="form-control" value={academy_program} onChange={handlechangeAcademyProgram} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Semestre:</label>
                            <input type="number" className="form-control" value={semester} onChange={handlechangeSemester} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Correo:</label>
                            <input type="email" className="form-control" value={email} onChange={handlechangeEmail} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono:</label>
                            <input type="text" className="form-control" value={phone} onChange={handlechangePhone} />
                        </div>
                    </div>
                </div>
                {!userToUpdate &&
                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="card-title"><i className="bi bi-shield-lock-fill"></i> Datos de acceso</h5>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">Usuario:</label>
                                <input type="text" className="form-control" value={user} onChange={handlechangeUser} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contraseña:</label>
                                <input type="password" className="form-control" value={password} onChange={handlechangePassword} />
                            </div>
                        </div>
                    </ div>
                }
                {error &&
                    <div className="alert alert-warning d-flex align-items-center" role="alert">
                        <i className="bi bi-exclamation-diamond-fill me-2"></i> {error}
                    </div>}
                {saved &&
                    <div className="alert alert-success d-flex align-items-center" role="alert">
                        <i className="bi bi-check-circle-fill me-2"></i> Información registrada correctamente.
                    </div>}
                <div className="d-flex justify-content-end">
                    {!userToUpdate && <button type="button" className="btn btn-secondary me-2" onClick={() => resetForm()}>Limpiar</button>}

                    {!userToUpdate
                        ? <button type="submit" className="btn btn-primary">Guardar</button>
                        : <button type="button" className="btn btn-warning" onClick={handleUpdate}>Editar</button>
                    }
                </div>
            </div>
        </form>
    );
}

export default FormMonitor;