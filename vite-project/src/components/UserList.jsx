import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userDeleted } from "./usersSlice";

export default function UserList() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);

  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Redux CRUD User app</h1>
      </div>
      <div>
        {/* <button className="button-primary">Load users</button> */}
        <br />
        <br />
        <Link to="/add">
          <button className="button-primary">Add user</button>
        </Link>
      </div>
      <br />
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          {users.map(({ id, name, email }, i) => (
            <tr key={i}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>
                <button onClick={() => handleDelete(id)}>Delete</button>
                <Link to={`/edit/${id}`}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
