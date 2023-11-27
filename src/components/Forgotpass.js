import { useState } from "react";

const Forgotpass = () => {
    const [email, setEmail] = useState();
    const submitForm = () => {
        console.log("submitted" + email);
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
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" onClick={submitForm} className="btn btn-primary mt-2">Next</button>
                        </div>
                    </div>
                </form>
                {/* <p role="button" className="text-primary" onClick={navigatePass}>forgot password?</p> */}
                {/* {error && <p className="text-danger bold">Invalid credentials</p>} */}
            </div>

        </div>
    );
}

export default Forgotpass;