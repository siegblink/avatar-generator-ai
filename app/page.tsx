'use client';

export default function Home() {
  return (
    <main className='container max-w-2xl mx-auto my-10 px-4'>
      {/* Image input */}
      <section className='w-full mx-auto mb-12'>
        <div className='text-center mb-10'>
          <h1 className='font-semibold text-transparent text-5xl bg-gradient-to-r from-blue-500 to-indigo-400 inline-block bg-clip-text'>
            AI Avatar Generator
          </h1>
        </div>

        <div className='flex flex-wrap mb-3'>
          <input
            id='title'
            name='title'
            type='text'
            placeholder='Type model name'
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
          />
        </div>
      </section>
    </main>
  );
}
