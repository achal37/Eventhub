'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use usePathname in App Router

function NavigationBar() {
  const pathname = usePathname(); // Get the current pathname

  return (
    <nav className="
   flex bg-[#f5f1ee] text-purple-700 text-center justify-between">
      <img
      src='/icon.png'
      className='w-14 h-12'
      />
      <ul className="flex gap-x-2 p-1">
        <li className={(pathname === '/' ? 'bg-orange-500 text-[#F8F8F8] font-bold' : '') +  ' py-2 px-4 rounded-md w-full'}>
          <Link href="/">Home</Link>
        </li>
        <li className={(pathname === '/about' ? 'bg-orange-500 text-[#F8F8F8] font-bold' : '') +  ' py-2 px-4 rounded-md w-full'}>
          <Link href="/about">About</Link>
        </li>
        <li className={(pathname === '/events' ? 'bg-orange-500 text-[#F8F8F8] font-bold' : '') +  ' py-2 px-4 rounded-md w-full'}>
          <Link href="/events">Events</Link>
        </li>
        <li className={(pathname === '/login' ? 'bg-orange-500 text-[#F8F8F8] font-bold' : '') +  ' py-2 px-4 rounded-md w-full'}>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
