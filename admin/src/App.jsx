import React from 'react';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <div>
      <Login />
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        theme="light"
      />
    </div>
  );
};

export default App;
