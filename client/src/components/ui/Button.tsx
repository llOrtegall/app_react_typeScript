import React from 'react'
import './styles.css'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button>
      {children}
    </button>
  )
}
