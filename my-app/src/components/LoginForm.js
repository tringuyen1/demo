import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import { login } from '../store/actions/auth';

// import { login } from '../store/actions/auth';

const LoginForm = (props) => {

    let navigate = useNavigate();

    const { isLoggedIn } = useSelector((state) => state.auth)

    console.log(isLoggedIn);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const handleUserNameChange = (e) => {
        const username = e.target.value;
        setUsername(username);
    }

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        dispatch(login(username, password))
            .then(() => {
                navigate("/todolist");
                window.location.reload();
            })
            .catch(() => {
                setLoading(false)
            })
    }

    if (isLoggedIn) {
        return <Navigate to="/todolist" />;
    }

    return (
        <div className='container'>
            <div className='row align-items-center' style={{ height: '100vh' }}>
                <div className='mx-auto col-10 col-md-8 col-lg-6'>
                    <h1 className='mb-3'>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-4">
                            <input type="text" id="form2Example1" className="form-control" value={props.username} onChange={handleUserNameChange} />
                            <label className="form-label" htmlFor="form2Example1">User Name</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example2" className="form-control" value={props.password} onChange={handlePasswordChange} />
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                        </div>

                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                                    <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                                </div>
                            </div>

                            <div className="col">

                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary btn-block mb-4" disabled={loading}>
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                        </div>

                        <div className="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm