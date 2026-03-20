import { siteConfig } from '@/lib/siteConfig';

export default function Hero() {
  return (
    <section className='p-10 text-center'>
      <h1 className='text-4xl font-bold mb-4'>{siteConfig.tagline}</h1>
      <p className='mb-6'>{siteConfig.description}</p>
      <a href='/quote' className='bg-black text-white px-6 py-2 rounded'>Get a Quote</a>
    </section>
  );
}
