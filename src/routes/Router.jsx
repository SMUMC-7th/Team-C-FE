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
} from '../pages/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <NotFound />,
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
        children: [
          {
            path: 'settings',
            element: <UserSettings />,
          },
        ],
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
        children: [
          {
            path: ':postId',
            element: <PostDetails />,
          },
        ],
      },
      {
        path: '/calendar',
        element: <Calendar />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
