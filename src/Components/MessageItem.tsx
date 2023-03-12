import styles from "./css/Message.module.css";
import "./css/Anim.css";
import React from "react";
import { userID } from "../services/firebase.services";

interface IMessage {
  userID: string;
  userName: string;
  date: string;
  content: string;
}

interface MessageItemProps {
  msg: IMessage;
  userName: string;
}
const MessageItem: React.FC<MessageItemProps> = ({ msg, userName }) => {
  return (
    <li
      className={`${styles["msg"]} ${
        styles[msg["userName"] == userName ? "user" : "vex"]
      }`}
    >
      <span className="userName">{msg["userName"]}</span>
      <span className="msg_text">{msg.content}</span>
      <span className="data">{msg.date}</span>
    </li>
  );
};
export default MessageItem;
