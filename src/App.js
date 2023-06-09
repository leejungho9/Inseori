import ArtShop from 'pages/ArtShop';
import Main from 'pages/Main';
import OneDayCalss from 'pages/OnedayCalss';
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
          path: 'onedayclass',
          element: <OneDayCalss />,
        },
        {
          path: 'onedayclass/:id',
          element: <OnedayClassDetail />,
        },
        {
          path: 'artshop',
          element: <ArtShop />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
