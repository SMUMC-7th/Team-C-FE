import { createContext, ReactNode, useState, useEffect } from 'react';

export const LoginContext = createContext({
  isLogin: false,
  setIsLogin: () => {},
  nickName: '',
  setNickName: () => {},
  profileImgUrl: '',
  setProfileImgUrl: () => {},
  kakaoProfileImg: '',
  setKakaoProfileImg: () => {},
});

export function LoginContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [nickName, setNickName] = useState('');
  const [profileImgUrl, setProfileImgUrl] = useState('');
  const [kakaoProfileImg, setKakaoProfileImg] = useState('');

  useEffect(() => {
    console.log('isLogin: ', isLogin);
    console.log('nickName', nickName);
    console.log('profileImg', profileImgUrl);
    console.log('kakaoProfileImg', kakaoProfileImg);
  }, [isLogin]);

  return (
    <LoginContext.Provider
      value={{
        setIsLogin,
        isLogin,
        nickName,
        setNickName,
        profileImgUrl,
        setProfileImgUrl,
        kakaoProfileImg,
        setKakaoProfileImg,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
