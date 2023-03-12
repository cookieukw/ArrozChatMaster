/* imports */
import React, { useState, useEffect } from "react";
 import 'react-toastify/dist/ReactToastify.css';

/* components */
import Input from "./Input";
import Button from "./Button";
import LinearLayout from "./LinearLayout";
import ListView from "./ListView";
import MessageItem from "./MessageItem";
import CornerLayout from "./CornerLayout";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { ToastContainer, toast } from 'react-toastify';

/* Vars, functions, classes*/
import { sendMessage, reference } from "../services/firebase.services";
import { onValue } from "firebase/database";

const App: React.FC = () => {
  interface IMessage {
    userID: string;
    userName: string;
    date: string;
    content: string;
  }

  const [messages, setMessages] = useState<IMessage[]>([]);

  const [userName, setName] = useState<string>("");

  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    onValue(reference, (snapshot): void => {
      const newData: IMessage[] = [];
      snapshot.forEach((el) => {
        const { userID, userName, date, content } = el.val();

        newData.push({
          userID,
          userName,
          date,
          content,
        });
      });
      setMessages(newData);
    });
  }, []);
  return (
    <LinearLayout>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <Input
        style={{
          marginBottom: "1rem",
          position: "sticky",
          top: "1rem",
        }}
        placeholder={"Type your name"}
        onChange={(e) => setName(e.target.value)}
        defaultValue={userName}
      />
      <ListView>
        {messages.map((item: IMessage, i: number) => (
          <MessageItem userName={userName} msg={item} key={i} />
        ))}
      </ListView>
      <CornerLayout
        style={{
          position: "fixed",
          bottom: 0,
          padding: "0.6rem",
          width: "fit-content",
        }}
      >
        <Input
          style={{
            padding: 0,
            margin: 0,
            fontSize: "1.2rem",
          }}
          placeholder={"Message"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SendOutlinedIcon
          style={{
            height: 50,
            width: 50,
            background: "#020c59",
            color: "white",
            borderRadius: ".6rem",
            padding: "0.6rem",
            marginLeft: "0.7rem",
          }}
          onClick={(): void => {
            if (!inputValue || !userName){
              toast("Preencha os campos!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
              return
          }
            sendMessage(userName, inputValue);
            setInputValue("");
          }}
        />
      </CornerLayout>
    </LinearLayout>
  );
};

export default App;
