import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  // void类型
  getValue: () => void
}

/** 泛型函数参数 */
export const identity = <T,>(value: T): T => value

export const mapArray = <T, K>(arr: T[], fn: (value: T) => K): K[] =>
  arr.map(fn)

/** 泛型类型参数 */
export type GenericType<Name, City, Age> = {
  name?: Name
  city: City
  age: Age
}

/** 泛型默认参数 */
export type ApiRequest<T, Method = 'GET'> = {
  data: T
  method: Method
}

export type Person = {
  name?: string
  city: string
  age: number
}

/** keyof关键字, 获取对象的key值 */
export const getObjectKey = (person: Person, key: keyof Person) => {
  return person[key]
}

export const me = {
  naem: 'mei',
  age: 10
}

export type NewPerson = typeof me
export type keyOfPerson = keyof typeof me

/** in关键字 */
export type CustomPartial<T> = {
  [key in keyof T]?: T[key]
}

/** class定义 */
class Cat<T> {
  private type: T
  constructor(type: T) {
    this.type = type
  }
}
export const cat: Cat<number> = new Cat(10)

/** 泛型约束 */
export const pickers = <T, K extends keyof T>(a: T, b: K) => a

/** 泛型条件和泛型约束 */
export type Foo<T> = T extends { t: infer U } ? U : string
export type OneFoo = Foo<number>
export type TwoFoo = Foo<{ t: boolean }>

/** 泛型工具----Record, 将K中所有属性值转化为T类型 */
type Record<K extends keyof any, T> = {
  [key in K]: T
}
export const obj: Record<string, number> = {
  a: 1,
  222: 2
}

/** 泛型工具---Pick建值对象, 将T类型的K提取出来 */
export type Pick<T, K extends keyof T> = {
  [key in K]: T[K]
}
export type Animal = {
  name: string
  category: string
  age: number
  eat: () => number
}
export const bird: Pick<Animal, 'name' | 'age'> = {
  name: 'bird',
  age: 10
}

/** 泛型工具---Exclude, 提出泛型中的交集 */
export type T1 = Exclude<'name' | 'category', 'name'>

/** 泛型工具---Omit, 省去建值对象 */
export type OmitResult = Omit<Animal, 'name'>

/** 泛型工具---ReturnType, 获取函数的返回值 */
export type Foos<T> = (x: T) => T
export type FooType = ReturnType<Foos<string>>

/** 泛型工具---Required, 必填项 */
export type Requireds = Required<Person>

const TypescriptStudy: FC<IProps> = () => {
  return <div> TypescriptStudy</div>
}

export default memo(TypescriptStudy)
