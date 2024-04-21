import SearchBar from './SearchBar'
import Link from 'next/link'
import Image from 'next/image'
function Header() {
  return (
    <header className='flex w-full justify-between items-center p-3'>
      <Link href='/'>
        <Image src='/logo.png' width={70} height={30} />
      </Link>
      <div className='flex items-center gap-5'>
        <SearchBar />
        <Link href='/products'>Productos</Link>
        <Link href='/categories'>Categorías</Link>
      </div>
      <nav className='flex items-center gap-3'>
        <Link href='/login'>Identifícate</Link>
        <Link href='/cart'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-shopping-cart'
            width='30'
            height='30'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#202020'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
            <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
            <path d='M17 17h-11v-14h-2' />
            <path d='M6 5l14 1l-1 7h-13' />
          </svg>
        </Link>
      </nav>
    </header>
  )
}
export default Header
