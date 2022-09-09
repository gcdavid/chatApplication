import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat-Me</span>
      <div className="userChat">
        <img
          className="userImg"
          src="https://images.unsplash.com/photo-1522767131594-6b7e96848fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=693&q=80"
          alt=""
        />
        <span>Randy</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
