import React, { memo, useState } from 'react'
import { Button, ButtonProps, message } from 'antd'

type IProps = {
  onClick: () => Promise<void>
  loading?: boolean
  style?: React.CSSProperties
  className?: string
  children: React.ReactNode
} & ButtonProps

const MyButton: React.FC<IProps> = ({
  onClick,
  loading = false,
  children,
  style,
  className,
  ...rest
}) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleClick = async () => {
    setIsDeleting(true)
    try {
      await onClick()
      message.success('删除成功！')
    } catch (error) {
      console.error('删除失败：', error)
      message.error('删除失败，请重试！')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Button
      type="primary"
      onClick={handleClick}
      loading={loading || isDeleting}
      style={style}
      className={className}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default memo(MyButton)
