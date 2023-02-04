import React, { useEffect, useState } from 'react';
import ChatListAppBar from '../../components/layout/appBar/ChatListAppBar';
import ChatList from '../../components/socket/ChatList';
import IconNavigationBar from '../../components/layout/navigationBar/IconNavigationBar';

import axios from 'axios';

const Chat = () => {
  const [roomData, setRoomData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3065/direct/room`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log('res: ', res.data.rooms);
        setRoomData(res.data.rooms);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  }, []);

  return (
    <div>
      <ChatListAppBar />
      <ChatList roomData={roomData} />
      <IconNavigationBar />
    </div>
  );
};

export default Chat;
