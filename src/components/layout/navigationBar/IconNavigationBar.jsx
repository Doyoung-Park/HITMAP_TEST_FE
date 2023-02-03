import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCookie } from '../../../shared/cookie';
import homeIcon from '../../../asset/icon/homeIcon.svg';
import snsIcon from '../../../asset/icon/snsIcon.svg';
import chatIcon from '../../../asset/icon/chatIcon.svg';
import myPageIcon from '../../../asset/icon/myPageIcon.svg';
import clickHomeIcon from '../../../asset/icon/clickHomeIcon.svg';
import clickSnsIcon from '../../../asset/icon/clickSnsIcon.svg';
import clickChatIcon from '../../../asset/icon/clickChatIcon.svg';
import clickMyPageIcon from '../../../asset/icon/clickMyPageIcon.svg';

const IconNavigationBar = () => {
  const navigate = useNavigate();
  const locationName = useLocation();
  const pathName = locationName.pathname;

  //토큰의 유무(로그인/비로그인)에 따라 접근권한 처리해주기 위해 가져온 값
  const authJudge = getCookie('auth');

  return (
    <BottomNavigationBar>
      <div className="icon-wrapper">
        {pathName === '/' ? (
          <img
            src={clickHomeIcon}
            alt=""
            onClick={() => {
              navigate('/');
            }}
          />
        ) : (
          <img
            src={homeIcon}
            alt=""
            onClick={() => {
              navigate('/');
            }}
          />
        )}
        {pathName === '/postlist' ? (
          <img
            src={clickSnsIcon}
            alt=""
            onClick={() => {
              navigate('/postlist');
            }}
          />
        ) : (
          <img
            src={snsIcon}
            alt=""
            onClick={() => {
              navigate('/postlist');
            }}
          />
        )}
        {/* <img
          src={chatIcon}
          alt=""
          onClick={() => {
            alert("준비중인 기능입니다.");
          }}
        /> */}
        {pathName === '/chat' ? (
          <img
            src={clickChatIcon}
            alt=""
            onClick={() => {
              authJudge ? navigate('/room') : alert('로그인이 필요한 기능이므로 로그인페이지로 이동합니다');
              authJudge ? navigate('/room') : navigate('/login');
            }}
          />
        ) : (
          <img
            src={chatIcon}
            alt=""
            onClick={() => {
              authJudge ? navigate('/room') : alert('로그인이 필요한 기능이므로 로그인페이지로 이동합니다');
              authJudge ? navigate('/room') : navigate('/login');
            }}
          />
        )}
        {pathName === '/mypage' || pathName === '/logInRegister' ? (
          <img
            src={clickMyPageIcon}
            alt=""
            onClick={() => {
              authJudge ? navigate('/mypage') : navigate('/logInRegister');
            }}
          />
        ) : (
          <img
            src={myPageIcon}
            alt=""
            onClick={() => {
              authJudge ? navigate('/mypage') : navigate('/logInRegister');
            }}
          />
        )}
      </div>
    </BottomNavigationBar>
  );
};

export default IconNavigationBar;

const BottomNavigationBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 375px;
  height: 83px;
  background-color: #ffffff;
  border-top: 1px solid #eef2f6;
  box-shadow: 0px -4px 24px rgba(0, 0, 0, 0.08);
  border-radius: 24px 24px 0px 0px;
  bottom: 0px;
  z-index: 100;
  .icon-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 36px;
    margin-top: 8px;
  }
  img {
    cursor: pointer;
  }
`;
