import React, { useState } from 'react';
// import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { instance } from '../../../redux/api/instance';
import { getCookie } from '../../../shared/cookie';

import io from 'socket.io-client';

const WriteCommentBar = ({ roomId }) => {
  //토큰의 유무(로그인/비로그인)에 따라 접근권한 처리해주기 위해 가져온 값
  const authJudge = getCookie('auth');
  //유저 정보 불러오는 fetchAPI와 data
  const userInfoAPI = () => {
    return authJudge ? instance.get('/me') : null;
  };
  const { data } = useQuery(['userInfo'], userInfoAPI);
  console.log('data: ', data);

  const socket = io.connect('http://localhost:3065/chat', {
    withCredentials: true,
    path: '/socket.io', // 서버에서 설정한 path와 동일하게 맞춰야 한다.
    transports: ['websocket'],
  });

  const [message, setMessage] = useState('');

  const onChangeMessageHandler = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    socket.emit('new_message', {
      roomId: roomId,
      userId: data.data.user_id, // 나의 user_id
      guestId: roomId, // 채팅 받을 사람의 user_id
      userImage: data.data.profile_image,
      userName: data.data.nickname,
      content: message,
    });
  };

  return authJudge ? (
    <StWriteChatContainer>
      <StWriteChatBarBox>
        <StUserProfileImg alt="유저 프로필이미지" src={data?.data.profile_image} />
        <StTextBar>
          <StTextInput
            maxLength="50"
            onChange={onChangeMessageHandler}
            placeholder="메시지 보내기(최대 50자)"
            value={message}
          />
          <StSendButton
            // 채팅방 삭제 onClick 함수 들어갈 자리
            onClick={sendMessage}>
            등록
          </StSendButton>
        </StTextBar>
      </StWriteChatBarBox>
    </StWriteChatContainer>
  ) : null;
};

export default WriteCommentBar;

const StWriteChatContainer = styled.div`
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.08);
  bottom: 0px;
  width: 375px;

  z-index: 100;
  position: absolute;
`;

const StWriteChatBarBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px 16px 39px 16px;
`;

const StUserProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50px;
`;

const StTextBar = styled.div`
  width: 300px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
`;

const StTextInput = styled.input`
  width: 240px;
  border: none;
  border-radius: 16px;
  ::placeholder {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #c2c2c2;
    text-indent: 16px;
  }
  &:focus {
    outline: none;
  }
`;

const StSendButton = styled.button`
  width: 50px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #979797;
  border: none;
  background-color: transparent;
`;
