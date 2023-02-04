import React, { useState, useEffect } from 'react';
import ChattingAppBar from '../layout/appBar/ChattingAppBar';
import WriteChatBar from '../layout/bottomBar/WriteChatBar';
import styled from 'styled-components';

// import { getCookie } from '../../shared/cookie';
// import { instance } from '../../redux/api/instance';
// import { useQuery } from '@tanstack/react-query';

import { useParams } from 'react-router-dom';

import { io } from 'socket.io-client';
import axios from 'axios';

const ChatCard = () => {
  const { guestId } = useParams();
  const [prevChatData, setPrevChatData] = useState([]);
  const [chat, setChat] = useState([]);
  //토큰의 유무(로그인/비로그인)에 따라 접근권한 처리해주기 위해 가져온 값
  // const authJudge = getCookie('auth');
  //유저 정보 불러오는 fetchAPI와 data
  // const userInfoAPI = () => {
  //   return authJudge ? instance.get('/me') : null;
  // };
  // const { data } = useQuery(['userInfo'], userInfoAPI);
  // console.log('data: ', data);

  const socket = io.connect('http://localhost:3065/chat', {
    withCredentials: true,
    path: '/socket.io', // 서버에서 설정한 path와 동일하게 맞춰야 한다.
    transports: ['websocket'],
  });

  useEffect(() => {
    axios
      .post(
        'http://localhost:3065/direct/chat',
        {
          guestId: guestId,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // console.log('res: ', res.data.data);
        setPrevChatData(res.data.data);
      })
      .catch((err) => {
        console.log('err: ', err);
      });

    socket.on('new_message', (msg) => {
      console.log('msg: ', msg);

      setChat([
        ...chat,
        {
          msg: msg,
        },
      ]);
    });
  }, [chat]);

  const renderChat = () => {
    return chat.map((message, index) => {
      console.log('message: ', message.msg);
      return (
        <div key={index}>
          <h3>
            <span>{message.msg}</span>
          </h3>
        </div>
      );
    });
  };

  const renderPrevChat = () => {
    return prevChatData.map((message, index) => {
      console.log('message: ', message.chat);
      return (
        <div key={index}>
          <h3>
            <span>{message.chat}</span>
          </h3>
        </div>
      );
    });
  };

  return (
    <>
      <p>test socket</p>
      <ChattingAppBar />
      <div>{renderPrevChat()}</div>
      <StChattingContentContainer>{renderChat()}</StChattingContentContainer>
      <WriteChatBar guestId={guestId} />
    </>
  );
};

export default ChatCard;

const StChattingContentContainer = styled.div`
  border: 1px solid red;
  /* color: #fff; */
`;
