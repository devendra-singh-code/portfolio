import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        {/* <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-36 mx-auto mb-2'/>  */}
        <p className='font-semibold text-[30px]'>Devendra<span className='text-red-700 text-[30px]'>.</span></p>


        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
            devendra.singh.code@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>@ 2025 Devendra Singh. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/devendra-singh-code">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/devendra-sgh/">LinkedIn</a></li>
            <li><a target='_blank' href="https://x.com/_devendra_sgh">Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
