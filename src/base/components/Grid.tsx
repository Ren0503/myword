import React from 'react'

interface GridItemProps {
  start?: number
  end?: number
  span?: number
  classProps?: string
  children: React.ReactNode
}

export const GridItem: React.FC<GridItemProps> = ({
  start,
  end,
  span,
  classProps,
  children,
}) => {
  const startString = start ? `col-start-${start}` : ''
  const endString = end ? `col-end-${end}` : ''
  const spanString = span ? `col-span-${span}` : ''

  return (
    <div className={`${startString} ${endString} ${spanString} ${classProps}`}>
      {children}
    </div>
  )
}

interface GridProps {
  spacing: number
  col: number
  classProps?: string
  children: React.ReactNode
}

export const Grid: React.FC<GridProps> = ({
  spacing,
  col,
  children,
  classProps,
}) => {
  return (
    <div className={`grid grid-cols-${col} gap-${spacing} ${classProps}`}>
      {children}
    </div>
  )
}


