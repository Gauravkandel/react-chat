import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from 'react-router-dom';
import Home from "../Home";
import Login from "../Login";
import Register from "../register";
import Forgotpass from "../Forgotpass";

function Guest() {
    return (
        <div>
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
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/forpass" element={<Forgotpass />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default Guest;
