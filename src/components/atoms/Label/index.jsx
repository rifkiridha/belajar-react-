import React from 'react'

export default function Label(props) {
    const {htmlFor,children} = props;
  return (
    <label htmlFor={htmlFor} className='text-sm text-white font-sans'>
        {children}
    </label>
  )
}
