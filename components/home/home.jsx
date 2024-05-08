import Link from 'next/link';

export default () => {
  console.log("hello world")
  return (
    <section className='border-3 border-black border-solid w-full h-unit-9xl flex justify-center items-center'>
        <Link><h1 className='text-2xl'>Home content!</h1></Link>
    </section>
  );
}
