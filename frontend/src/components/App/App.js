import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login, NotAuthorized, Register } from '../pages';
import Layout from '../layout';
import RequiredAuth from '../ProtectedRoutes/Auth';
function App() {
  const allowedRoles = {
    admin: "admin",
    user: "user"
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        
            {/* common Routes */}
            <Route element={<RequiredAuth allowedRole={[allowedRoles.admin, allowedRoles.user]} />} >
              <Route path="/home" element={<Home />} />
            </Route>

            <Route path="/notAuthorized" element={<NotAuthorized />}  />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
