import FollowingPage from '~/pages/FollowingPage';
import HomePage from '~/pages/HomePage';
import ProfilePage from '~/pages/ProfilePage';

// Public routes
const publicRoutes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/following',
    component: FollowingPage
  },
  {
    path: '/profile',
    component: ProfilePage
  }
];

// Private routes
const privateRoutes = [];

export { privateRoutes, publicRoutes };
