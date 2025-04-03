import { Link } from 'react-router-dom'

// Types
import type React from 'react'
import type { ButtonsProps } from '../types/customTypes'

const CustomButton: React.FC<ButtonsProps> = ({
  href,
  to,
  onclick,
  label,
  variant,
}) => {
  const baseStyles =
    'w-36 h-10 text-xs lg:w-42 lg:h-12 lg:text-base font-semibold rounded-lg shadow-md cursor-pointer transition-colors duration-1000 ease-in-out transform hover:scale-105 hover:shadow-lg'

  const variants = {
    white_dark:
      'text-neutral-100 bg-zinc-700 dark:text-zinc-700 dark:bg-neutral-100 hover:bg-zinc-700 dark:hover:bg-neutral-200',
    purple_pink:
      'text-zinc-100 bg-[#d946ef] dark:text-neutral-100 dark:bg-[#db2777] hover:bg-[#c026d3] dark:hover:bg-[#be185d]',
  }

  const button = (
    <button className={`${baseStyles} ${variants[variant]}`}>{label}</button>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {button}
      </a>
    )
  }
  if (to) {
    return <Link to={to}>{button}</Link>
  }
  if (onclick) {
    return <button onClick={onclick}>{button}</button>
  }

  return button
}

export default CustomButton
