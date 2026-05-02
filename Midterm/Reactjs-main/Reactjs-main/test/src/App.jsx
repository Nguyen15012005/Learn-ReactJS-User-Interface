import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="container py-4">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;