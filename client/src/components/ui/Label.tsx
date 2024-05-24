import React from 'react'
import './styles.css'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>{}

export const Label = ({ children }: LabelProps) => {
  return (
    <label>
      {children}
    </label>
  )
}
