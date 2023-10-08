import React from 'react'
import classes from './MessageInputSection.module.css'
import { FontAwesome, Feather, Ionicons } from 'react-web-vector-icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { messageSliceActions } from '../toolkit/MessageSlice'
import { storeMessage } from '../api/POST';
import {IoSendSharp} from "react-icons/io5";
const MessageInputSection = () => {
  const dispatch = useDispatch();
  const user_id = '2';
  const userName = "Rohit";
  const [body, setBody] = useState("");
  const inputTextHandler=(e)=>{
    setBody(e.target.value);
  }
  const sendButtonHandler =()=>{
    if(body.length==0){
      return;
    }
    // console.log(body);
    // const messageObj = {
    //   id : new Date().toISOString(),
    //   user_id :user_id,
    //   body : body

    // }
    storeMessage(user_id,body,userName).then((messageObj)=>{
      // console.log(obj);
      dispatch(messageSliceActions.insertMessage(messageObj))
    })
    setBody("");
  }
  //-------------------
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Call the function or perform the action you want when Enter is pressed
      // handleEnterPress();
      // console.log("hit");
      sendButtonHandler();
    }
  };
  //-------------------
  return (
    <section className={classes.messageInputSection}>
      <section className={classes.left}></section>
      <section className={classes.mid}>
        <input
          className={classes.textInput}
          type="text"
          name=""
          id=""
          placeholder='Type your text here'
          onChange={inputTextHandler}
          value = {body}
          onKeyUp={handleKeyPress}
        />
      </section>
      <section className={classes.right}>
        <IoSendSharp
          color='blue'
          size={'2rem'}
          onClick={sendButtonHandler}
        />
        {/* <button onClick={sendButtonHandler}>send</button> */}
      </section>
    </section>
  )
}

export default MessageInputSection