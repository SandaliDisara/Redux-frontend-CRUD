import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { userUpdated } from "./usersSlice";


export default function EditUser() {
  const { pathname } = useLocation();
  const userId = pathname.replace("/edit/", "");

  const user = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [error, setError] = useState(null);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        userUpdated({
          id: userId,
          name,
          email,
        })
      );

      setError(null);
      navigate("/");
    } else {
      setError("Fill in all fields");
    }

    setName("");
    setEmail("");
  };

  
  return (
    <div className="container">
      <div className="row">
        <h1>Add user</h1>
      </div>
      <div className="row">
        <label>Name: </label>
        <input
          type="text"
          placeholder="Jhon Doe"
          id="nameInput"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />

        <br />
        <br />

        <label>Email: </label>
        <input
          type="email"
          placeholder="test@mailbox.com"
          id="emailInput"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <br />
        <br />
        {error && error}
        <button onClick={handleClick}>Save user</button>
      </div>
    </div>
  );
}
