import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1522767131594-6b7e96848fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=693&q=80"
          alt=""
        />
        <div className="userChatInfo">
          <span>Randy Orton</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
