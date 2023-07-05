import React, { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logout } from '../store/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUser } from '../store/actions/users'


export default function TodoList({ route }) {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const { userList: users } = useSelector((state) => state.users)
    
    const location = useLocation();
    console.log(location.state?.id);
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUser())
    }, [])

    const handleDeleteUser = (row) => {
        if (!window.confirm(`Are you sure you want to delete ${row.firstName} ${row.lastName}`)) {
            return;
        }
        dispatch(deleteUser(row.id))
    }

    const logOut = useCallback(() => {
        dispatch(logout())
    }, [dispatch])

    const totalPages = Math.ceil(users.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container py-5">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-5">
                                <h2>User <b>Management</b></h2>
                            </div>
                            <div className="col-sm-7">
                                <Link to={'/'} className="btn btn-secondary" onClick={logOut}><i className="material-icons">logout</i> <span>Log out</span></Link>
                                <Link to={'/profile'} className="btn btn-secondary"><i className="material-icons">account_circle</i> <span>Profile</span></Link>
                                <Link to={'/add'} className="btn btn-secondary"><i className="material-icons">add</i> <span>Add</span></Link>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Date Created</th>
                                <th>email</th>
                                <th>gender</th>
                                <th>phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td><Link to={`/profile/${user.id}`}><img src={user.image} className="avatar" alt="Avatar" style={{ width: '10%' }} /> {user.firstName + " " + user.lastName}</Link></td>
                                    <td>{user.birthDate}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.phone}</td>
                                    <td className='text-nowrap overflow-hidden'>
                                        <Link to={`/profile/${user.id}`} state={{ isEdit: true }} className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">edit</i></Link>
                                        <Link className="delete" title="Delete" data-toggle="tooltip" onClick={() => handleDeleteUser(user)}><i className="material-icons">delete</i></Link>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <div className="clearfix">
                        <div className="hint-text">Showing <b>{currentPage}</b> of <b>{totalPages}</b> page</div>
                        <ul className="pagination">
                            <li className="page-item"><button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button></li>

                            {/* Page numbers */}
                            {Array.from({ length: totalPages }, (_, index) => (
                                <li className="page-item">
                                    <button
                                        key={index + 1}
                                        onClick={() => handlePageChange(index + 1)}
                                        disabled={currentPage === index + 1}
                                        className="page-link"
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                            <li className="page-item"><button href="#" className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}