import React from 'react';
// import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
// import { getCookie } from "../../../shared/cookie";
import StatusBar from './StatusBar';

const ChatListAppBar = () => {
  // const navigate = useNavigate();
  // //토큰의 유무(로그인/비로그인)에 따라 접근권한 처리해주기 위해 가져온 값
  // const authJudge = getCookie("auth");

  return (
    <StSnsMainAppBarContainer>
      <StatusBar />
      <StSnsMainAppBarBox>
        <StSnsMainAppBarTitle>채팅</StSnsMainAppBarTitle>
      </StSnsMainAppBarBox>
    </StSnsMainAppBarContainer>
  );
};

export default ChatListAppBar;

const StSnsMainAppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: #f6f6f6;
  width: 375px;
  height: 108px;
  z-index: 100;
`;

const StSnsMainAppBarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;

const StSnsMainAppBarTitle = styled.label`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;
