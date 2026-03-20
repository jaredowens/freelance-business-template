import { siteConfig } from '@/lib/siteConfig';

export default function Header() {
  return (
    <header className='p-4 border-b flex justify-between'>
      <h1 className='font-bold'>{siteConfig.businessName}</h1>
      <nav className='space-x-4'>
        <a href='/'>Home</a>
        <a href='/services'>Services</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
      </nav>
    </header>
  );
}
