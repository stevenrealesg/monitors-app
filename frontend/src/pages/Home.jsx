import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar';

function Home() {
    return (
        <div className='d-flex'>
            <Sidebar />
            <main className='container mt-3 w-100' style={{ marginLeft: "250px" }}>
                <Outlet />
            </main>
        </div>
    );
}

export default Home;