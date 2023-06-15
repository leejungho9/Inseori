import ArtShop from 'pages/ArtShop';
import Cafe from 'pages/Cafe';
import CultureSpace from 'pages/CultureSpace';
import Main from 'pages/Main';
import OnedayClass from 'pages/OnedayClass';
import OnedayClassDetail from 'pages/OnedayClassDetail';
import RoomA from 'pages/RoomA';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from 'router/routes';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      // errorElement: <NotFoundPage />  ,
      children: [
        {
          path: '/',
          element: <Main />,
        },
        {
          path: 'roomA',
          element: <RoomA />,
        },
        {
          path: 'onedayClass',
          element: <OnedayClass />,
        },
        {
          path: 'onedayClass/:id',
          element: <OnedayClassDetail />,
        },
        {
          path: 'artshop',
          element: <ArtShop />,
        },
        {
          path: 'cafe',
          element: <Cafe />,
        },
        {
          path: 'cultureSpace',
          element: <CultureSpace />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
