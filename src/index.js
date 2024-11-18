import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Components/Login/Login';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import MoviePage from './Components/MoviePage/MoviePage';
import {Provider} from 'react-redux';
import {store}  from '../src/Components/CommonService/Store/store'
const router = createBrowserRouter([
  {
    children: [
      {
        path: "/movies/:eid",
        element:<MoviePage/>,      
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/",
        element:<Login/>
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
