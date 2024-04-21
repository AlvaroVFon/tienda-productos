'use client'
import { useRouter } from 'next/navigation'
function SearchBar() {
  const router = useRouter()
  return (
    <div>
      <input
        type='text'
        placeholder='Search for products'
        className='p-2 w-full font-thin rounded-full text-black'
        name='search'
        onChange={(e) => {
          router.push(`/search?search=${e.target.value}`)
        }}
      />
    </div>
  )
}
export default SearchBar
