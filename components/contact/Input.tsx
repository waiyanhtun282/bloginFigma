import { InputTypProps } from '@/types/type';
import React, { FC } from 'react'
type InputTypPropsWithOptionalValue = InputTypProps & { value?: string };

const Input:FC<InputTypPropsWithOptionalValue>= ({ type, label, value }) => {
  return (
    <div className="mb-6">
    <label
      htmlFor={label}
      className="block mb-2 text-sm font-medium text-gray-900 "
    >
      {label}
    </label>
    <input
      type={type}
      id={label}
      className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-transparent sm:text-md focus:outline-none focus:border-h_600 dark:bg-dar dark:border-h_600 dark:focus:border-h_400"
    /> 
  </div>

  )
}

export default Input;
