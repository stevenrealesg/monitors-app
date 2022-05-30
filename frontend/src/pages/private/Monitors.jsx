import { useEffect, useState } from "react";
import Monitor from "../../components/Monitor";
import serviceMonitor from "../../services/monitor"

function Monitors() {

    const [monitors, setMonitors] = useState();
    const [getAgain, setGetAgain] = useState(false)
    const [userToUpdate, setUserToUpdate] = useState(null)

    useEffect(() => {
        serviceMonitor.getAll().then(monitors => {
            setMonitors(monitors)
        })
    }, [getAgain])

    const deleteMonitor = async (id) => {
        await serviceMonitor.remove(id)
        setGetAgain(prev => !prev)
    }

    const updateMonitor = (data) => {
        setUserToUpdate(data)
    }

    return (
        <>
            <h3 className="mb-3 border-bottom pb-3">Listado de monitores</h3>
            <div className="row">
                {monitors && monitors.map(monitor => (
                    <Monitor
                        key={monitor.id}
                        {...monitor}
                        handleDelete={() => deleteMonitor(monitor.id)}
                        setGetAgain={setGetAgain}
                        handleUpdate={() => updateMonitor(monitor)}
                        userToUpdate={userToUpdate}
                    />
                ))}
            </div>
        </>
    );
}

export default Monitors;