import { lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from 'router/routes';

const ArtShop = lazy(() => import('pages/ArtShop'));
const Cafe = lazy(() => import('pages/Cafe'));
const CultureSpace = lazy(() => import('pages/CultureSpace'));
const Main = lazy(() => import('pages/Main'));
const OnedayClass = lazy(() => import('pages/OnedayClass'));
const OnedayClassDetail = lazy(() => import('pages/OnedayClassDetail'));
const RoomA = lazy(() => import('pages/RoomA'));

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

  return (
    <Suspense fallback="..loading">
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
