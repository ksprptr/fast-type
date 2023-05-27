import Link from 'next/link'
import React from 'react'


export default function Footer() {
  return (
    <footer className='bg-gray-800'>
      <div className='page-width'>
        <div className='md:flex block text-center justify-between py-4 text-lg text-gray-50'>
          <h3>&copy; FastType 2023</h3>
          <h3>Created by <Link href="https://dortwess.com" target='_blank' className='text-lime-500 hover:text-lime-600 duration-150 font-medium'>Petr Dortwess</Link></h3>
        </div>
      </div>
    </footer>
  )
}