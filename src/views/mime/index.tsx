import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import MyButton from '../../components/MyButton'
import styles from './index.module.less'
import classNames from 'classnames'
import styled from 'styled-components'

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
    </div>
  )
}

export default memo(Mime)
