import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
    Link,
    useLocation,
    useNavigate,
    useParams,
} from 'react-router-dom';
import { updateUser } from '../store/actions/users';

export default function Profile(props) {

    const { id } = useParams();
    const [user, setUser] = useState({})
    const [isEdit, setEdit] = useState(false);
    const { user: currentUser } = useSelector((state) => state.auth)
    const { userList: users } = useSelector((state) => state.users)
    console.log("user", user);

    let { state } = useLocation();
    let dispatch = useDispatch()
    let navigator = useNavigate()

    useEffect(() => {
        if (state && !isEdit) {
            setEdit(!isEdit);
        }
    }, [state, isEdit]);

    useEffect(() => {
        if (id) {
            const newUser = users.find((user) => user.id == id);
            setUser(newUser);
        } else {
            setUser(currentUser)
        }
    }, [])

    const handleUpdateUser = (row) => {
        dispatch(updateUser(row))
        navigator('/todolist', {
            state: row
        });
    }

    return (
        <section>
            <div className="container py-5">
                <div className='mb-4'>
                    <Link to={'/todolist'} className='mt-1'>Go back</Link>
                </div>
                {user && <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img src={user.image} alt="avatar" className="rounded-circle img-fluid" style={{ width: 150 }} />
                                <h5 className="my-3">{user.username}</h5>
                                <p className="text-muted mb-1">Full Stack Developer</p>
                                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                {isEdit ? (
                                    <div>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">First Name</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input
                                                    type='text'
                                                    className="text-muted mb-0"
                                                    value={user.firstName}
                                                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                                                />
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
                                                    className="text-muted mb-0"
                                                    value={user.lastName}
                                                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Full Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{user.firstName + " " + user.lastName}</p>
                                        </div>
                                    </div>
                                )}
                                <hr />
                                {isEdit ? (
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">User Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <input
                                                type='text'
                                                className="text-muted mb-0"
                                                value={user.username}
                                                onChange={(e) => setUser({ ...user, username: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">User Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{user.username}</p>
                                        </div>
                                    </div>
                                )}
                                <hr />
                                {isEdit ? (
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <input
                                                type='text'
                                                className="text-muted mb-0"
                                                value={user.email}
                                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{user.email}</p>
                                        </div>
                                    </div>
                                )}
                                <hr />
                                {isEdit ? (
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Gender</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <input
                                                type='text'
                                                className="text-muted mb-0"
                                                value={user.gender}
                                                onChange={(e) => setUser({ ...user, gender: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Gender</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{user.gender}</p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                    {isEdit && (
                        <div className="col-md-12 text-right mt-4">
                            <Link to={'/todolist'} ><button type="button" className="btn btn-primary mr-4">Cancel</button></Link>
                            <button type="button" className="btn btn-warning" onClick={() => handleUpdateUser(user)}>Save</button>
                        </div>
                    )}
                </div>}

            </div>
        </section>
    )
}
