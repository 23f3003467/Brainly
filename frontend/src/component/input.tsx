// import React from 'react';



// Simple TailwindCSS style map for the Input component
const inputStyles: Record<string, string> = {
  default: 'bg-white text-gray-900 border rounded border-gray-500',
  primary: 'bg-white text-black p-2 border border-gray-400 rounded-lg hover:bg-purple-300',
  secondary: 'bg-gray-100 text-gray-900 border-gray-200',
  danger: 'bg-red-50 text-red-700 border-red-300',
};

export default function Input({ type = 'text',value,reference, placeholder = '', styleType = 'default' ,onChange}: { type?: string; value?:string; placeholder?: string; styleType?: string ;reference?:any ;onChange?:({}:any)=>void}) {
  const styleClass = inputStyles[styleType] || inputStyles.default;


    return (
        <input 
            type={type}
            value={value}
            placeholder={placeholder}
            className={styleClass}
            onChange={onChange}
            ref={reference}
        />
    )
}