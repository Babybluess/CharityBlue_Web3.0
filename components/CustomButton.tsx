import React from 'react'

interface CustomButtonProps {
    title: string;
    styles: string;
  }
  
  const CustomButton = ({
    title,
    styles,
    }: CustomButtonProps) => {
    return (
        <button
        type="submit"
        className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
        >
        {title}
    </button>
  )
}

export default CustomButton