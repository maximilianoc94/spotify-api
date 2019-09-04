import React from 'react';
import { Router } from '@reach/router';
import Categories from './pages/categories';
import Login from './pages/login';
import Auth from './pages/authenticate';

function App() {
  return (
    <Router>
      <Login path="/" />
      <Categories path="/categories/" />
      <Auth path="/auth/" />
    </Router>
  );
}

export default App;
