import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './Home';
import PricingPage from './PricingPage';
import HomeLayout from './sections/moreComponent/HomeLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'pricing',
        element: <PricingPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
