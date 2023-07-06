import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
  Link,
  // useLocation,
  // useParams,
  useNavigate,
} from 'react-router-dom';
import { addUser } from '../store/actions/users';

export default function AddUser() {

  const [user, setUser] = useState({});

  let dispatch = useDispatch();
  let navigator = useNavigate();
  let id = Math.floor(Math.random() * 100)

  const handleAddUser = (user) => {
    console.log(user);
    dispatch(addUser(user))
    navigator('/todolist')
  }

  return (
    <section>
      <div className="container py-5">
        <div className='mb-4'>
          <Link to={'/todolist'} className='mt-1'>Go back</Link>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
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
                <hr />
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
                <hr />
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
                <hr />
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

              </div>
            </div>
          </div>
          <div className="col-md-12 bg-light text-right mt-4">
            <Link to={'/todolist'} ><button type="button" className="btn btn-primary mr-4">Cancel</button></Link>
            <button type="button" className="btn btn-warning" onClick={() => handleAddUser(user)}>Add</button>
          </div>
        </div>
      </div>
    </section>
  )
}
