import Spinner from 'components/Common/Spinner/Spinner';
import NotFoundPage from 'pages/NotFoundPage';
import { lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from 'router/routes';

const ArtShop = lazy(() => import('pages/ArtShop'));
const Cafe = lazy(() => import('pages/Cafe'));
const CultureSpace = lazy(() => import('pages/CultureSpace'));
const Main = lazy(() => import('pages/Main'));
const OnedayClass = lazy(() => import('pages/OnedayClass'));
const OnedayClassDetail = lazy(() => import('pages/OnedayClassDetail'));
const Room = lazy(() => import('pages/Room'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: '/',
          element: <Main />,
        },
        {
          path: '/stay/room/:id',
          element: <Room />,
        },
        {
          path: '/lesson',
          element: <OnedayClass />,
        },
        {
          path: '/lesson/:id',
          element: <OnedayClassDetail />,
        },
        {
          path: '/shop',
          element: <ArtShop />,
        },
        {
          path: '/cafe',
          element: <Cafe />,
        },
        {
          path: '/culture',
          element: <CultureSpace />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
