import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '../../store'
import { decremented, incremented } from '../../store/modules/counter'
import TypescriptStudy from '../../components/TypescriptStudy'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const { count } = useAppSelector(
    (state) => ({
      count: state.counter.count
    }),
    shallowEqualApp
  )

  const dispatch = useAppDispatch()
  function addCount() {
    dispatch(incremented())
  }
  function subCount() {
    dispatch(decremented())
  }

  const getValue = (): number => 2

  return (
    <div>
      <div>count：{count}</div>
      <button onClick={subCount}>-1</button>
      <button onClick={addCount}>+1</button>

      <TypescriptStudy getValue={getValue} />
    </div>
  )
}

export default memo(Home)
