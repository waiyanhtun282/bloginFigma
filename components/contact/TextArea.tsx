import React from 'react'

const TextArea = ({label}:any) => {
  return (
    <>
    <label
      htmlFor={label}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
    </label>
    <textarea
      id={label}
      rows={4}
      className="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:border-gray-600 dark:bg-dar dark:border-h_600 dark:focus:border-h_400"
      placeholder="Write your question here..."
      defaultValue={""}
    />
  </>
  )
}

export default TextArea
