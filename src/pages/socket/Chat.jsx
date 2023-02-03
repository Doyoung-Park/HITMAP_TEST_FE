import React from 'react';
import ChatListAppBar from '../../components/layout/appBar/ChatListAppBar';
import ChatList from '../../components/socket/ChatList';
import IconNavigationBar from '../../components/layout/navigationBar/IconNavigationBar';

const Chat = () => {
  return (
    <div>
      <ChatListAppBar />
      <ChatList />
      <IconNavigationBar />
    </div>
  );
};

export default Chat;
