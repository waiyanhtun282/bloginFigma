import { Loading } from '@/public'
import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className=' min-h-screen flex justify-center items-center dark:bg-dar'>
      <Image  src={Loading} alt='loading' className=' w-[500px]  object-contain dark:bg-dar'/>
    </div>
  )
}

export default loading
