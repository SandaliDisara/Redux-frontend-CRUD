import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAdded } from "./usersSlice";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const usersAmount = useSelector((state) => state.users.length);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
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
        <button onClick={handleClick}>Add user</button>
      </div>
    </div>
  );
}
