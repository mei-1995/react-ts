import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Mime: FC<IProps> = () => {
  return <div>Mime</div>
}

export default memo(Mime)
