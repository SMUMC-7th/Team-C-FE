import GlobalFont from './styles/GlobalFont';
import GloabalStyle from './styles/GlobalStyle';
import Router from './routes/Router';
import { LoginContextProvider } from './context/LoginContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { generateToken, messaging } from './remote/firebase.js';
import { onMessage } from 'firebase/messaging';

function App() {
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
    });
  }, []);

  const queryClient = new QueryClient();

  return (
    <LoginContextProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalFont />
        <GloabalStyle />
        <Router />
      </QueryClientProvider>
    </LoginContextProvider>
  );
}

export default App;
