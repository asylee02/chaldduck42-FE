import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-w-[375px] max-w-[600px] px-[29px] pt-[48px] h-full bg-Beige1 ">
      {children}
    </div>
  )
}
