import React, { memo, useMemo } from 'react'
import type { FC, ReactNode } from 'react'
import MyButton from '../../components/MyButton'
import styles from './index.module.less'
import classNames from 'classnames'
import styled from 'styled-components'
import HocPermissio from '../../components/HocPermisson'
import HocPermission from '../../components/HocPermisson'

interface IProps {
  children?: ReactNode
}

const StyledButton = styled.button<{ primary?: boolean }>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.primary ? 'red' : 'gray')};
`

const Mime: FC<IProps> = () => {
  const handleDelete = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  const tailwindClasses = classNames(
    'bg-blue-500',
    {
      flex: true,
      'a-b': false
    },
    ['background', 'font']
  )

  const HocElement: any = useMemo(() => <div>index页面</div>, [])
  return (
    <div className={styles.mimeWrap}>
      <MyButton
        style={{ marginLeft: '11px', height: '100px', background: 'red' }}
        onClick={handleDelete}
      >
        myButton
      </MyButton>

      <StyledButton primary>css in js</StyledButton>

      <div className={tailwindClasses}>tailwind</div>

      <h1 className="font-bold text-[20px]">hoc 权限</h1>
    </div>
  )
}

export default memo(HocPermission('tag')(Mime))
