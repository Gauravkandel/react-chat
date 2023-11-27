import { useState } from "react";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import AuthUser from "./AuthUser";
import Forgotpass from "./Forgotpass";

const Login = () => {
    const { http, setToken } = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    function submitForm() {
        // console.log(email + ' ' + password);
        http.post('/login', { email: email, password: password }).then((res) => {
            if (res.data.status != 401) {
                setToken(res.data.user, res.data.access_token);
            }
            else {
                setError(true);
            }
        });
    }
    function navigatePass() {
        navigate('/forpass');
    }
    return (

        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-sm-2" >Email:</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" >Password:</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" onClick={submitForm} className="btn btn-primary mt-2">Submit</button>
                        </div>
                    </div>
                </form>
                <p role="button" className="text-primary" onClick={navigatePass}>forgot password?</p>
                {error && <p className="text-danger bold">Invalid credentials</p>}
            </div>

        </div>
    );
}

export default Login;