import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserList />}></Route>
          <Route path="/add" element={<AddUser />}></Route>
          <Route path="/edit/:id" element={<EditUser />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
