import React from 'react'

interface AuthLayoutProps {
  children: React.ReactNode
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

