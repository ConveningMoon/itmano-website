import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './screens/home/Home';
import SignUp from './screens/auth/SignUp';
import LogIn from './screens/auth/LogIn';

import './styles.css';

const App: React.FC = () => (
  <div className="app">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/register' element={<SignUp />}/>
      <Route path='/login' element={<LogIn />}/>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
};

export default App;
