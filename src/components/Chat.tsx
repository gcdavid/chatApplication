import React from "react";
import Video from "../assets/video.svg";
import Dots from "../assets/dots.svg";
import Account from "../assets/accounts.svg";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Video} alt="" />
          <img src={Dots} alt="" />
          <img src={Account} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
