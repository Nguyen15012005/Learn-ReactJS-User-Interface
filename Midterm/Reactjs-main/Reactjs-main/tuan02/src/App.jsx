import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductCard } from '../components/ProductCard'
import { Button } from '../components/Button'
import Alert from '../components/Alert'
import Input from '../components/Input'
import LoginForm from '../components/LoginForm'
import ProductList from '../components/ProductList'

function App() {
  const product = {
    img: "https://cdn2.cellphones.com.vn/x/media/catalog/product/t/e/text_ng_n_5__8_69.png?_gl=1*1tqg3l0*_gcl_aw*R0NMLjE3NjkzODc2NTguQ2owS0NRaUFtOWZMQmhDUUFSSXNBSm9OT2NzbU5nRUpSRmRUX1FXRmVYbDZfaGF4NDFpb21yUldvNmhmN3RmVE1ZNWxWNHJnUUVWWDV5MGFBcGRzRUFMd193Y0I.*_gcl_au*MTY2NDQ3MDI0MS4xNzY5Mzg3NjU2*_ga*MTg0ODM3NTkxMi4xNzY5Mzg3NjU4*_ga_QLK8WFHNK9*czE3NjkzODc2NTgkbzEkZzAkdDE3NjkzODc2NTgkajYwJGwwJGgxMDI3MjY1Nzcz",
    name: "Laptop Gaming",
    price: "19.900.000đ"
  };

  return (
    <div className="App">
      <ProductCard product={product} />
      {/* <ProductList /> */}
      {/* <LoginForm background="#f0f0f0" border="1px solid #ccc"/> */}
    </div>
  );
}

export default App
