import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import StatusBar from './StatusBar';
import ChatDeleteConfirmModal from '../../socket/ChatDeleteConfirmModal';
import backButton from '../../../asset/button/backButton.svg';
import deleteChatIcon from '../../../asset/icon/deleteChatIcon.svg';

const ChattingAppBar = () => {
  const navigate = useNavigate();
  const [deleteChatConfirmModal, setDeleteChatConfirmModal] = useState(false);

  return (
    <StSnsDetailAppBarContainer>
      <StatusBar />
      <StBackIconBackGround>
        <StBackIconImg
          src={backButton}
          alt="뒤로가기 아이콘"
          onClick={() => {
            navigate('/postlist');
          }}
        />
        <div>상대아이디자리</div>
        <StDeleteChatIconImg
          alt="채팅방삭제아이콘"
          src={deleteChatIcon}
          onClick={() => {
            setDeleteChatConfirmModal(!deleteChatConfirmModal);
          }}
        />
        {deleteChatConfirmModal && <ChatDeleteConfirmModal setDeleteChatConfirmModal={setDeleteChatConfirmModal} />}
      </StBackIconBackGround>
    </StSnsDetailAppBarContainer>
  );
};

export default ChattingAppBar;

const StSnsDetailAppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 375px;
  height: 108px;
  z-index: 100;
`;

const StBackIconBackGround = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;

const StBackIconImg = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

const StDeleteChatIconImg = styled.img`
  cursor: pointer;
`;

// const StMoreIconImg = styled.img`
//   width: 48px;
//   height: 48px;
//   cursor: pointer;
// `;
