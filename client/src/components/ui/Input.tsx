import React from 'react'
import './styles.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}

export const Input = ({ ...props }: InputProps) => {
  return (
    <input {...props} />
  )
}
