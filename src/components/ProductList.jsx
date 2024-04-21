import api from '@/lib/FakeStoreApi'
import Image from 'next/image'
async function ProductList() {
  const products = await api.getProducts()

  return (
    <div className='grid grid-cols-6 gap-5 p-10'>
      {products.map((product) => (
        <div key={product.id}>
          <Image
            src={product.images[0]}
            alt={product.title}
            width={300}
            height={300}
            className='h-64 w-52 rounded-lg'
          />
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  )
}
export default ProductList
