import React from 'react';
import styled from 'styled-components';

const ChatDeleteConfirmModal = ({ setDeleteChatConfirmModal }) => {
  //채팅방 삭제 확인 모달창 끄는 함수
  const closeDeleteChatConfirmModal = () => {
    setDeleteChatConfirmModal(false);
  };

  return (
    <StDeleteChatConfirmAll>
      <StDeleteChatConfirmBox>
        <StDeleteChatConfirmMessage>
          채팅방을 삭제하시겠습니까?
          <StDeleteChatDetailMessage>
            <p>
              선택한 채팅방의 대화가 삭제됩니다. <br />
              삭제된 채팅은 다시 복구할 수 없습니다.
            </p>
          </StDeleteChatDetailMessage>
        </StDeleteChatConfirmMessage>
        <StDeleteConfirmButtonBox>
          <StDeleteConfirmCancelButton onClick={closeDeleteChatConfirmModal}>취소</StDeleteConfirmCancelButton>
          <StDeleteConfirmDeleteButton
          // onClick={() => {
          //   deleteComment.mutate();
          // }}
          >
            삭제
          </StDeleteConfirmDeleteButton>
        </StDeleteConfirmButtonBox>
      </StDeleteChatConfirmBox>
    </StDeleteChatConfirmAll>
  );
};

export default ChatDeleteConfirmModal;

const StDeleteChatConfirmAll = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 99.9vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

const StDeleteChatConfirmBox = styled.div`
  width: 312px;
  height: 215px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
`;

const StDeleteChatConfirmMessage = styled.div`
  margin: 16px 0 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  width: 280px;
  height: 123px;
  color: #1f1f1f;
`;

const StDeleteChatDetailMessage = styled.div`
  text-align: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #979797;
`;

const StDeleteConfirmButtonBox = styled.div``;

const StDeleteConfirmCancelButton = styled.button`
  width: 136px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #006981;
  margin-right: 4px;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #006981;
  cursor: pointer;
`;

const StDeleteConfirmDeleteButton = styled.button`
  width: 136px;
  height: 48px;
  margin-left: 4px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  background: #006981;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
