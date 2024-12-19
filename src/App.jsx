import GlobalFont from './styles/GlobalFont';
import GloabalStyle from './styles/GlobalStyle';
import Router from './routes/Router';
import { LoginContextProvider } from './context/LoginContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ModalContextProvider } from './context/ModalContext';

function App() {
  const queryClient = new QueryClient();

  return (
    <LoginContextProvider>
      <ModalContextProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalFont />
          <GloabalStyle />
          <Router />
        </QueryClientProvider>
      </ModalContextProvider>
    </LoginContextProvider>
  );
}

export default App;
