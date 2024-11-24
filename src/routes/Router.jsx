import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '../layout/root-layout';
import {
  Landing,
  Home,
  UserSettings,
  Mypage,
  PolicyRecommend,
  PolicyDetails,
  Community,
  PostDetails,
  Calendar,
  NotFound,
  PostWrite,
  EditProfile,
} from '../pages/index';
import Login from '../pages/login/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <NotFound />,
  },
  {
    path: '/settings',
    element: <UserSettings />,
  },
  {
    path: '/auth/kakao-oauth',
    element: <Login />,
  },
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/my',
        element: <Mypage />,
      },
      {
        path: '/my/settings',
        element: <EditProfile />,
      },
      {
        path: '/recommend',
        element: <PolicyRecommend />,
      },
      {
        path: '/policy/:policyId',
        element: <PolicyDetails />,
      },
      {
        path: '/community',
        element: <Community />,
      },
      {
        path: '/community/:postId',
        element: <PostDetails />,
      },
      {
        path: '/calendar',
        element: <Calendar />,
      },
      {
        path: '/postwrite',
        element: <PostWrite />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
