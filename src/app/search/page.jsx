import api from '@/lib/FakeStoreApi'
import Image from 'next/image'
async function SearchPage({ searchParams }) {
  const { search } = searchParams
  const products = await api.getProductsByName(search)

  return (
    <div>
      <h1>Search Results</h1>
      <div className='grid grid-cols-4 gap-5 p-6'>
        {products.map((product) => (
          <div key={product.id} className=''>
            <Image
              src={`https://source.unsplash.com/random/200x200?sig=${product.id}`}
              alt={product.title}
              width={300}
              height={300}
              className='h-64 w-52 rounded-lg'
            />
            <div className=''>
              <p className='w-52 p-3 text-center'>{product.title}</p>
              <p className='w-52 p-3 text-center'>{product.price} €</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default SearchPage
