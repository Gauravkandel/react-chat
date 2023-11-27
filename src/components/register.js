import { useState } from "react";
import AuthUser from "./AuthUser";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const { http, setToken } = AuthUser();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    function submitForm() {
        // console.log(email + ' ' + password);
        http.post('/register', { name: name, email: email, password: password }).then((res) => {
            navigate('/login');
        });
    }
    return (
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-sm-2" >Name:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={e => setName(e.target.value)} />
                        </div>
                    </div>
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
            </div>
        </div>
    );
}

export default Register;