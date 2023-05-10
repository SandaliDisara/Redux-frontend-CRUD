import React from "react";
import { useSelector } from "react-redux";

export default function UserList() {
  const users = useSelector((state) => state.users);

  return (
    <div className="container">
      <div className="row">
        <h1>Redux CRUD User app</h1>
      </div>
      <div>
        <button className="button-primary">Load users</button>
        <br />
        <br />
        <button className="button-primary">Add user</button>
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
                <button>Delete</button>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
