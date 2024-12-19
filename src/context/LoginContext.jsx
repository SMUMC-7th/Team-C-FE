import { createContext, ReactNode, useState, useEffect } from 'react';

export const LoginContext = createContext({
  isLogin: undefined,
  setIsLogin: () => {},
  nickName: '',
  setNickName: () => {},
  profileImgUrl: '',
  setProfileImgUrl: () => {},
  kakaoProfileImg: '',
  setKakaoProfileImg: () => {},
});

export function LoginContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(undefined);
  const [nickName, setNickName] = useState('');
  const [profileImgUrl, setProfileImgUrl] = useState('');
  const [kakaoProfileImg, setKakaoProfileImg] = useState('');

  // useEffect(() => {
  //   console.log('isLogin: ', isLogin);
  // }, [isLogin]);

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
