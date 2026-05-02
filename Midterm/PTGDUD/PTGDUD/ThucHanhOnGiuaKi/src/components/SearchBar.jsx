import { useEffect, useState, useRef } from 'react'
function SearchBar() {
    const [products, setProduct] = useState([])
    const [search, setSearch] = useState("")

    // 1. Tạo ref cho ô input
    const searchInputRef = useRef(null);

    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data)
            })
    }, [])
    // Focus vào ô tìm kiếm sau khi component mount
    useEffect(() => {
        searchInputRef.current?.focus();
    }, []); // [] đảm bảo chỉ chạy 1 lần sau mount

    // Lọc sản phẩm theo search keyword
    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <div>

                <h2 className='DanhSach'>Danh Sach List</h2>
                <input type="text" placeholder='Tim kiem san pham' value={search} onChange={e => setSearch(e.target.value) } ref={searchInputRef} />
                {filtered.length == 0 && <p> Khong tim thay san pham</p>}
                {filtered.map(p => (
                    <p key={p.id}>
                        {p.title} - ${p.price} - {p.category}
                    </p>
                ))}
            </div>


        </>
    )
}

export default SearchBar