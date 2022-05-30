import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Monitors from './pages/private/Monitors';
import Login from './pages/Login';
import RequirePermissions from './pages/private/RequirePermissions';
import NotFound from './pages/NotFound';
import AddMonitor from './pages/AddMonitor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path="/app" element={<Home />}>
          <Route index element={<Navigate to='list' />} />
          <Route path="list" element={<RequirePermissions><Monitors /></RequirePermissions>} />
          <Route path="add" element={<RequirePermissions><AddMonitor /></RequirePermissions>} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
