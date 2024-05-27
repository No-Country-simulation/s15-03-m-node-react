import React from 'react'

const Alert = ({ text }) => {
  return (
    <div className='fixed left-1 bottom-1 text-sm text-error text-left px-6 py-2 backdrop:blur-sm opacity-95 rounded-lg bg-[rgba(0,0,0,0.7)]'>{text}</div>
  )
}

export default Alert