import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <div className='container mx-auto'>
      {children}
    </div>
  )
}
