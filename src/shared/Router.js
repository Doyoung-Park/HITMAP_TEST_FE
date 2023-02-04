import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '../pages/user/SignUp';
import Login from '../pages/user/Login';
import SocialAuth from '../pages/user/kakaoLogin/SocialAuth';
import Main from '../pages/main/Main';
import Weather from '../pages/main/Weather';
import PostList from '../pages/sns/PostList';
import DetailPost from '../pages/sns/DetailPost';
import CreatePost from '../pages/sns/CreatePost';
import Chat from '../pages/socket/Chat';
import MyPage from '../pages/mypage/MyPage';
import EditMyInfo from '../pages/mypage/EditMyInfo';
import LogInRegister from '../pages/mypage/LogInRegister';
import Withdraw from '../components/myPage/EditMyInfo/LogoutWithdraw/Withdraw';

import ChatContent from '../components/socket/ChatContent';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/socialauth" element={<SocialAuth />} />
        <Route path="/" element={<Main />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/postlist" element={<PostList />} />
        <Route path="/detail/:postId" element={<DetailPost />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/room" element={<Chat />} />
        <Route path="/chat/:guestId" element={<ChatContent />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/editMyInfo" element={<EditMyInfo />} />
        <Route path="/logInRegister" element={<LogInRegister />} />
        <Route path="/withdraw" element={<Withdraw />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
