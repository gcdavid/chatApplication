import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.unsplash.com/photo-1662511024026-bc935d6d7962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://images.unsplash.com/photo-1662511024026-bc935d6d7962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
