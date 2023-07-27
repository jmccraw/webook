import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  redirect,
  RouterProvider
} from 'react-router-dom';

import Rooms from './features/rooms';

import './styles/reset.css';
import './styles/vars.css';
import './styles/defaults.css';

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/rooms') // we only have one route, so just redirect to it
  },
  {
    path: '/rooms',
    element: (
      <Rooms />
    )
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
