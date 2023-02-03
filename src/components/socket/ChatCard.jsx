import React from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

const ChatCard = ({ data }) => {
  console.log('data: ', data);
  const navigate = useNavigate();

  const onClickChattingHandler = () => {
    navigate(`/chat/${data.userId}`);
  };

  return (
    <StChatList onClick={onClickChattingHandler}>
      <StOtherPersonProfileImgBox>
        <StOtherPersonProfileImg alt="상대프로필자리" src={data.userImage} />
      </StOtherPersonProfileImgBox>
      <StChatInfoBox>
        <StOtherPersonInfo>
          <StOtherPersonNickName>{data.userName}</StOtherPersonNickName>
          <StChatLastCreateTime>17:50</StChatLastCreateTime>
        </StOtherPersonInfo>
        <StChatContentInfo>
          <StChatLastContent>{data.content}</StChatLastContent>
          <StChatStackNumber>1</StChatStackNumber>
        </StChatContentInfo>
      </StChatInfoBox>
    </StChatList>
  );
};

export default ChatCard;

const StChatList = styled.div`
  cursor: pointer;
  width: 343px;
  height: 72px;
  background: #ffffff;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.04);
  margin: 0 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
`;

const StOtherPersonProfileImgBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
`;
const StOtherPersonProfileImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50px;
`;

const StChatInfoBox = styled.div`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  width: 248px;
  gap: 8px;
`;

const StOtherPersonInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const StOtherPersonNickName = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #3f3f3f;
`;

const StChatLastCreateTime = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #c2c2c2;
`;

const StChatContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const StChatLastContent = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #979797;
  //string길어지면 ...으로 처리하는 css
  width: 180px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const StChatStackNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background: #e5294a;
  border-radius: 50px;
  color: white;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
`;
