import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
  Link,
  // useLocation,
  // useParams,
  useNavigate,
} from 'react-router-dom';
import { useValidator } from "../validation/useValidator";
import styles from "../validation/LoginForm.module.css";
import { addUser } from '../store/actions/users';

export default function AddUser() {

  let dispatch = useDispatch();
  let navigator = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    gender: "",
    image: "",
    created: "2003-08-02"
  });
  const { errors, validateFormAdd, onBlurFieldAdd } = useValidator(form);

  const onUpdateField = e => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };
    setForm(nextFormState);
    if (errors[field].dirty)
      validateFormAdd({
        form: nextFormState,
        errors,
        field,
      });
  };

  const handleAddUser = (user) => {
    const { isValid } = validateFormAdd({ form, errors, forceTouchErrors: true });
    if (!isValid) {
      return;
    }
    console.log(user);
    // dispatch(addUser(user))
    // navigator('/todolist')
  }

  return (
    <section>
      <div className="container py-5">
        <div className='mb-4'>
          <Link to={'/todolist'} className='mt-1'>Go back</Link>
        </div>
        <div className="row row-center">
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Image</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type='text'
                      className="text-muted mb-0 mr-3"
                      name='image'
                      value={form.image}
                      onChange={onUpdateField}
                      onBlur={onBlurFieldAdd}
                    />
                    {errors.image.dirty && errors.image.error ? (
                      <p className={styles.formFieldErrorMessage}>
                        {errors.image.message}
                      </p>
                    ) : null}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">First Name</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type='text'
                      className="text-muted mb-0 mr-3"
                      name='firstName'
                      value={form.firstName}
                      onChange={onUpdateField}
                      onBlur={onBlurFieldAdd}
                    />
                    {errors.firstName.dirty && errors.firstName.error ? (
                      <p className={styles.formFieldErrorMessage}>
                        {errors.firstName.message}
                      </p>
                    ) : null}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Last Name</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type='text'
                      className="text-muted mb-0 mr-3"
                      name='lastName'
                      value={form.lastName}
                      onChange={onUpdateField}
                      onBlur={onBlurFieldAdd}
                    />
                    {errors.lastName.dirty && errors.lastName.error ? (
                      <p className={styles.formFieldErrorMessage}>
                        {errors.lastName.message}
                      </p>
                    ) : null}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">User Name</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type='text'
                      className="text-muted mb-0 mr-3"
                      name='username'
                      value={form.username}
                      onChange={onUpdateField}
                      onBlur={onBlurFieldAdd}
                    />
                    {errors.username.dirty && errors.username.error ? (
                      <p className={styles.formFieldErrorMessage}>
                        {errors.username.message}
                      </p>
                    ) : null}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type='text'
                      className="text-muted mb-0 mr-3"
                      name='email'
                      value={form.email}
                      onChange={onUpdateField}
                      onBlur={onBlurFieldAdd}
                    />
                    {errors.email.dirty && errors.email.error ? (
                      <p className={styles.formFieldErrorMessage}>
                        {errors.email.message}
                      </p>
                    ) : null}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Gender</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type='text'
                      className="text-muted mb-0 mr-3"
                      name='gender'
                      value={form.gender}
                      onChange={onUpdateField}
                      onBlur={onBlurFieldAdd}
                    />
                    {errors.gender.dirty && errors.gender.error ? (
                      <p className={styles.formFieldErrorMessage}>
                        {errors.gender.message}
                      </p>
                    ) : null}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type='text'
                      className="text-muted mb-0 mr-3"
                      name='phone'
                      value={form.phone}
                      onChange={onUpdateField}
                      onBlur={onBlurFieldAdd}
                    />
                    {errors.phone.dirty && errors.phone.error ? (
                      <p className={styles.formFieldErrorMessage}>
                        {errors.phone.message}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-right mt-4">
          <Link to={'/todolist'} ><button type="button" className="btn btn-primary mr-4">Cancel</button></Link>
          <button type="button" className="btn btn-warning" onClick={() => handleAddUser(form)}>Add</button>
        </div>
      </div>
    </section>
  )
}
