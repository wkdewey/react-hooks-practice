import React, { useState, useEffect } from "react";
import useFriendStatus from "./useFriendStatus";

function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  return isOnline ? "Online" : "Offline";
}

export default FriendStatusWithCounter;
