import { createContext, ReactNode, useState, useEffect } from 'react';

export const LoginContext = createContext({
  isLogin: false,
  setIsLogin: () => {},
});

export function LoginContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const accessToken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('accessToken='));
    setIsLogin(accessToken ? true : false);
  }, []);

  return (
    <LoginContext.Provider value={{ setIsLogin, isLogin }}>
      {children}
    </LoginContext.Provider>
  );
}
