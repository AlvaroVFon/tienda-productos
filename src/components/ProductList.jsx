import api from '@/lib/FakeStoreApi'
async function ProductList() {
  const products = await api.getProducts()
  console.log(products)
  return (
    <div>
      <h1>Products</h1>
      <div className=''>
        {products.map((product) => (
          <div>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default ProductList
