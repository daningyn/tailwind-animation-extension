import React from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

// temp not found page
const NotFoundPage = () => {
  return (
    <div>Not Found Path</div>
  );
};

const Router = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          Hello World!!!
        </>
      ),
    },
    {
      path: '404',
      element: <NotFoundPage />
    },
    {
      path: '*',
      element: (
        <Navigate to='/404' replace />
      )
    }
  ]);

  return <RouterProvider router={router} />;

};

export default Router;