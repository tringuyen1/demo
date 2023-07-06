import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import { login } from '../store/actions/auth';
import { useValidator } from "../validation/useValidator";
import styles from "../validation/LoginForm.module.css";


const LoginForm = (props) => {

    let navigate = useNavigate();

    const { isLoggedIn } = useSelector((state) => state.auth)

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        username: "",
        password: "",
    });
    const { errors, validateForm, onBlurField } = useValidator(form);

    const onUpdateField = e => {
        const field = e.target.name;
        const nextFormState = {
            ...form,
            [field]: e.target.value,
        };
        setForm(nextFormState);
        if (errors[field].dirty)
            validateForm({
                form: nextFormState,
                errors,
                field,
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
        if (!isValid) {
            setLoading(false)
            return;
        }
        dispatch(login(form.username, form.password))
            .then(() => {
                navigate("/todolist");
                window.location.reload();
            })
            .catch(() => {
                setLoading(false)
            })
    }

    const messageError = (field) => {
        if (errors.field.dirty && errors.field.error) {
            return (
                <p className={styles.formFieldErrorMessage}>
                    {errors.field.message}
                </p>
            )
        } else {
            return null;
        }
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
                            <label className="form-label" htmlFor="form2Example1">User Name</label>
                            <input
                                type="text"
                                id="form2Example1"
                                name="username"
                                className="form-control"
                                value={form.username}
                                onChange={onUpdateField}
                                onBlur={onBlurField}
                            />
                            {errors.username.dirty && errors.username.error ? (
                                <p className={styles.formFieldErrorMessage}>
                                    {errors.username.message}
                                </p>
                            ) : null}
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                            <input
                                type="password"
                                id="form2Example2"
                                name="password"
                                className="form-control"
                                value={form.password}
                                onChange={onUpdateField}
                                onBlur={onBlurField}
                            />
                            {errors.password.dirty && errors.password.error ? (
                                <p className={styles.formFieldErrorMessage}>
                                    {errors.password.message}
                                </p>
                            ) : null}
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