import api from '@/lib/FakeStoreApi'
import Image from 'next/image'
async function ProductPage({ params }) {
  const { productID } = params
  const product = await api.getProductById(productID)

  return (
    <>
      {product.length !== 0 && (
        <div className='grid h-screen place-items-center'>
          <div className='flex gap-20'>
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className='rounded-lg'
            />
            <div className='flex flex-col justify-between'>
              <h1 className='text-3xl pb-3 font-bold max-w-96'>
                {product.title}
              </h1>
              <p className='w-96 font-thin'>{product.description}</p>
              <p className='text-2xl font-bold mt-5'>${product.price}</p>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-lg max-w-36'>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
      {product.length === 0 && (
        <div className='grid h-screen place-items-center'>
          <h1 className='text-3xl font-bold'>Product not found</h1>
        </div>
      )}
    </>
  )
}
export default ProductPage
