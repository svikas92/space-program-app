import LaunchProgramsList from './pages/LauchProgramsList';
import NotFoundPage from './pages/NotFoundPage';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        ...LaunchProgramsList,
        path: '/',
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
