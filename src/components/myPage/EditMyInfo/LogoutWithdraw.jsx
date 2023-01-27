/* 로그아웃 컴포넌트 */
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as GreyClickIcon } from "../../../asset/icon/GreyClickIcon.svg";
import LogoutConfirmModal from "./LogoutConfirmModal";

const LogoutWithdraw = () => {
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const showModal = () => {
    setLogoutModalOpen(true);
  };

  return (
    <>
      <LogoutWrapper>
        <button onClick={showModal}>
          <span>로그아웃</span>
          <GreyClickIcon />
        </button>
        {logoutModalOpen && (
          <LogoutConfirmModal setLogoutModalOpen={setLogoutModalOpen} />
        )}
      </LogoutWrapper>
      <WithdrawWrapper>
        <button>
          <span>회원탈퇴</span>
          <GreyClickIcon />
        </button>
      </WithdrawWrapper>
    </>
  );
};

export default LogoutWithdraw;

const LogoutWrapper = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    width: 375px;
    height: 64px;
    padding: 16px;
    cursor: pointer;
    background: #ffffff;
    border-bottom: 1px solid #dfdfdf;
  }
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #1f1f1f;
  }
`;

const WithdrawWrapper = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    width: 375px;
    height: 64px;
    padding: 16px;
    cursor: pointer;
    background: #ffffff;
  }
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #1f1f1f;
  }
`;
