import { useEffect, useState, useRef } from 'react'
import ProductItem from './ProductItem'
function ProductList() {
    const [products, setProduct] = useState([])
    //Loading
    const [loading, setLoading] = useState(true)
    //Err
    const [error, setError] = useState(null)
    //Search
    const [search, setSearch] = useState("")

    //Fetch dữ liệu 
    /*useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])*/

    // 1. Tạo ref cho ô input
    const searchInputRef = useRef(null);

    // Fetch dữ liệu có thêm Loading và Err
    useEffect(() => {
        setTimeout(() => {
            fetch("/products.json")
                .then(res => {
                    if (!res.ok) {
                        throw new Error("Không thể tải dữ liệu")
                    }
                    return res.json()
                })
                .then(data => {
                    setProduct(data)
                    setLoading(false)
                })
                .catch(err => {
                    setError(err)
                    setLoading(false)
                })
        }, 1000)

    }, [])
    // Focus vào ô tìm kiếm sau khi component mount
    useEffect(() => {
        searchInputRef.current?.focus();
    }, []); // [] đảm bảo chỉ chạy 1 lần sau mount

    // Lọc sản phẩm theo search keyword
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
    )

    //Nếu load giữ liệu
    /*if (loading) {
        return <p>Loading tasks...</p>
    }*/
    //Hàm xóa 
    const handleDelete = (id) => {
        const newList = products.filter(p => p.id !== id)
        setProduct(newList)
    }



    return (
        <>
            <div>
                {/*<h1 className='DanhSach'>Danh Sach Sản Phẩm</h1>*/}
                <input type="text" placeholder='Tim kiem san pham' value={search} onChange={e => setSearch(e.target.value)} ref={searchInputRef} />
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error.message}</p>
                ) : (
                    <>
                        {filtered.length === 0 && <p>Không tìm thấy sản phẩm</p>}

                        <div className="grid">
                            {filtered.map(p => (
                                <ProductItem key={p.id} product={p} onDelete={handleDelete} />
                            ))}
                        </div>
                    </>
                )}
            </div>


        </>
    )
}

export default ProductList