import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/userProvider';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserFavorites from './components/Profile/UserFav'


ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route  path="profile"element={<UserFavorites/>} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
