import React from 'react'

interface CustomButtonProps {
    title: string;
    styles: string;
    handleClick: () => void
  }
  
  const CustomButton = ({
    title,
    styles,
    handleClick
    }: CustomButtonProps) => {
    return (
        <button
        type="button"
        className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
        onClick={handleClick}
        >
        {title}
    </button>
  )
}

export default CustomButton