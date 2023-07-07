import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import {
  Link,
  // useLocation,
  // useParams,
  useNavigate,
} from 'react-router-dom';
import clsx from "clsx"
import { useValidator } from "../validation/useValidator";
import styles from "../validation/Form.module.css";
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
    birthDate: new Date().toISOString().slice(0, 10)
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
    dispatch(addUser(user))
    navigator('/todolist')
  }

  const messageError = (field) => {
    if (field.dirty && field.error) {
      return (
        <p className={styles.formFieldErrorMessage}>
          {field.message}
        </p>
      )
    } else {
      return null;
    }
  }

  const classNameError = (field) => {
    return (
      clsx(
        'text-muted mb-0 mr-3',
        field.dirty &&
        field.error &&
        styles.formFieldError
      )
    )
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
                      className={classNameError(errors.image)}
                      name='image'
                      value={form.image}
                      onChange={onUpdateField}
                      onBlur={onBlurFieldAdd}
                    />
                    {messageError(errors.image)}
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
                      className={classNameError(errors.firstName)}
                      name='firstName'
                      value={form.firstName}
                      onChange={onUpdateField}
                      onBlur={onBlurFieldAdd}
                    />
                    {messageError(errors.firstName)}
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
                      className={classNameError(errors.lastName)}
                      name='lastName'
                      value={form.lastName}
                      onChange={onUpdateField}
                      onBlur={onBlurFieldAdd}
                    />
                    {messageError(errors.lastName)}
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
                      className={classNameError(errors.username)}
                      name='username'
                      value={form.username}
                      onChange={onUpdateField}
                      onBlur={onBlurFieldAdd}
                    />
                    {messageError(errors.username)}
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
                      className={classNameError(errors.email)}
                      name='email'
                      value={form.email}
                      onChange={onUpdateField}
                      onBlur={onBlurFieldAdd}
                    />
                    {messageError(errors.email)}
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
                      className={classNameError(errors.gender)}
                      name='gender'
                      value={form.gender}
                      onChange={onUpdateField}
                      onBlur={onBlurFieldAdd}
                    />
                    {messageError(errors.gender)}
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
                      className={classNameError(errors.phone)}
                      name='phone'
                      value={form.phone}
                      onChange={onUpdateField}
                      onBlur={onBlurFieldAdd}
                    />
                    {messageError(errors.phone)}
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
