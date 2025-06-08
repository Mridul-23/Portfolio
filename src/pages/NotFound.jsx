import React from 'react'

const NotFoundPage = () => {
  return (
    <>
    <div className='bg-gray-800 min-h-screen flex items-center justify-center'>
      <div className='p-8 rounded shadow-md text-center'>
        <h1 className='text-white text-4xl font-bold mb-4'>404</h1>
        <p className='text-gray-300'>Page Not Found</p>
        <p className='text-slate-500'>Sorry, the page you are looking for does not exist.</p>
        <p className='text-slate-500'>Please check the URL or return to the homepage.</p>
        <a href="/" className='mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Go to Homepage</a>
        </div>
    </div>
    </>
  )
}

export default NotFoundPage