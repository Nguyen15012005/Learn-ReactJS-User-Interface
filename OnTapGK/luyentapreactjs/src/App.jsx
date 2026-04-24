import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="component">
        <ProductList />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
