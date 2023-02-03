import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChatCard from './ChatCard';

import { getCookie } from '../../shared/cookie';
import { instance } from '../../redux/api/instance';
import { useQuery } from '@tanstack/react-query';

import axios from 'axios';

const ChatList = () => {
  const [roomData, setRoomData] = useState(null);

  //토큰의 유무(로그인/비로그인)에 따라 접근권한 처리해주기 위해 가져온 값
  const authJudge = getCookie('auth');
  //유저 정보 불러오는 fetchAPI와 data
  const userInfoAPI = () => {
    return authJudge ? instance.get('/me') : null;
  };
  const { data } = useQuery(['userInfo'], userInfoAPI);
  console.log('data: ', data);

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
    <StChatListContainer>
      {roomData?.map((data, index) => {
        console.log('data: ', data);
        return <ChatCard key={index} data={data} />;
      })}
    </StChatListContainer>
  );
};

export default ChatList;

const StChatListContainer = styled.div`
  height: 80vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  gap: 16px;
`;
