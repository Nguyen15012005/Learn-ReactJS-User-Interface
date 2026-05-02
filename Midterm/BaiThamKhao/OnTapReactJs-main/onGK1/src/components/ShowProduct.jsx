import React, { useEffect, useMemo, useState,useRef } from 'react'

const ShowProduct = () => {
    const [products ,  setProducts] = useState([])
    const [search , setSearch] = useState("")
    const [category , setCategory] = useState("all")
    const [newProduct, setNewProduct] = useState({
        name:"",
        price:0,
        category:""
    })
    let inputRef = useRef(null)

    useEffect(()=>{
        const  fetchData = async () => {
            const res = await fetch('/products.json')
            const data = await res.json()
            setProducts(data)
        }
        fetchData()
        if (inputRef.current) inputRef.current.focus()
    },[])

    const searchFilterProduct = useMemo(()=>{ 
        return products.filter((product)=>
         (product.name.toLowerCase().includes(search.toLowerCase()))&&
        (category==="all"?true:product.category.toLowerCase()===category.toLowerCase()))
    },[category,products,search]) 

    const handleAdd = () => {
        if (!newProduct.name.trim()||newProduct.price<0||!newProduct.category.trim()) return
        
        const newItem = {
            ...newProduct,
            id:Date.now()
        }

        setProducts([...products,newItem])
        setNewProduct({
            name:"",
            price:0,
            category:""
        })
    } 
    const handleDelete = (id) => {
        setProducts(products.filter((product)=>{return product.id!==id}))
    }
        
  return (
    <div>
        <div>
            <label htmlFor="search">Search : </label>
            <input ref={inputRef}
            type="text" value={search} onChange={(e)=>setSearch(e.target.value)} id='search'/>
            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="all">All</option>
                <option value="phone">Phone</option>
                <option value="Laptop">Laptop</option>
            </select>
        </div>
        <h2>Nhập sản phẩm :</h2>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={newProduct.name} onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})}/>
        <label htmlFor="price">Price: </label>
        <input type="text" id="price" value={newProduct.price} onChange={(e)=>setNewProduct({...newProduct,price:Number(e.target.value)})}/>
        <label htmlFor="category">Category: </label>
        <input type="text" id="category" value={newProduct.category} onChange={(e)=>setNewProduct({...newProduct,category:e.target.value})}/>
        <button onClick={handleAdd}>Add</button>
        <hr />
        <ul>
            {searchFilterProduct.map((product)=>{
            return (
                
                    <li key={product.id} style={{'display':'flex','gap':'10px'}}>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <p>{product.category}</p>
                        <button onClick={()=>handleDelete(product.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default ShowProduct