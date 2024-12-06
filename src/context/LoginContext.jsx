import { createContext, ReactNode, useState } from 'react';
import { Cookies } from 'react-cookie';

export const LoginContext = createContext({
  isLogin: false,
  setIsLogin: () => {},
});

const cookies = new Cookies();

export function LoginContextProvider({ children }) {
  const accessToken = cookies.get('accessToken') || null;

  console.log(accessToken);

  const [isLogin, setIsLogin] = useState(accessToken === null ? false : true);
  console.log(isLogin);

  return (
    <LoginContext.Provider value={{ setIsLogin, isLogin }}>
      {children}
    </LoginContext.Provider>
  );
}
