/*chức năng thêm/xóa sản phẩm.*/
function ProductItem({ product, onDelete }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Giá: {product.price} đ</p>
      <p>Danh mục: {product.category}</p>

      <button onClick={() => onDelete(product.id)}>
        Delete
      </button>
    </div>
  )
}


export default ProductItem