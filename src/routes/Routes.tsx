import React from 'react';
import { HashRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import LandingPage from '../pages/landing-page/LandingPage.tsx';
import NavBar from '../components/layout/Navbar/NavBar.tsx';
import ProductListingPage from '../pages/product-listing-page/ProductListingPage.tsx';
import ShoppingCartPage from '../pages/shopping-cart-page/ShoppingCartPage.tsx';

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/product-listing' element={<><NavBar /><ProductListingPage /></>} />
        <Route path='/shopping-cart' element={<><NavBar/><ShoppingCartPage /></>} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
