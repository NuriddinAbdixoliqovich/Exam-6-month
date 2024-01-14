import React from 'react'
import { forwardRef } from 'react'


function Input ({type, placeholder, className, id, ...restProps}, ref) {
    return (
        <input 
            ref={ref}
            type={type}
            placeholder={placeholder}
            id={id}
            className={`border border-[#EAEAEA] p-2 rounded-[3px] focus:outline-none focus:border-green-500 w-[350px] h-10 text-[14px] ${className}`}
            {...restProps}
            />
    )
}

export default forwardRef(Input);