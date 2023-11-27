import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from "../Dashboard";
import Home from "../Home";
import AuthUser from "../AuthUser";
import users from "../users";
import '../css/auth.css';
import Users from "../users";
import User from "../user";

function Auth() {
    const { logout, token } = AuthUser();
    function logoutAuth() {
        if (token != undefined) {
            logout();
        }
    }
    return (
        <div className="auth">
            <nav className="navbar navbar-expand-lg navbar-white border-bottom border-dark-100 bg-white">
                <span className="navbar-brand  ms-5 me-2" >Navbar</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-5" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users">Users</Link>
                        </li>
                        <li className="nav-item">
                            <span role="button" className="nav-link" onClick={logoutAuth} >logout</span>
                        </li>

                    </ul>
                </div>
            </nav>
            <div className="container ">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                    <Route path="/users" element={<Users />}></Route>
                    <Route path="/user/:id" element={<User />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default Auth;
