import GlobalFont from './styles/GlobalFont';
import GloabalStyle from './styles/GlobalStyle';
import Router from './routes/Router';
import { LoginContextProvider } from './context/LoginContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
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
