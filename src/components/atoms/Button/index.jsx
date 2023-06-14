import React from 'react'

export default function Button(props) {
    const { color = "", children, size } = props;
    return (
<button type="button" className={`col-span-full sm:col-span-3 px-8 py-3 font-semibold rounded-full ${color} ${size} dark:bg-gray-100 dark:text-gray-800`}>{children}</button>
    )
}



