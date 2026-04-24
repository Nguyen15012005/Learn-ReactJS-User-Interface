import { useEffect, useState } from 'react'
function ProductList() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    fetch("/products.json")
    .then(res => res.json())
    .then(data =>{ console.log(data);
        setProduct(data)

    })
  },[])
  
  return (
    <>
    <div>
        <h2 className='DanhSach'>Danh Sach List</h2>
        {products.map(a => ( <p key={a.id}> {a.name} -${a.price} - {a.category}    </p>))
        }
    </div>
      
    </>
  )
}

export default ProductList