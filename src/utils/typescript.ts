/** 泛型函数参数 */
export const identity = <T>(value: T): T => value

export const mapArray = <T, K>(arr: T[], fn: (value: T) => K): K[] =>
  arr.map(fn)

/** 泛型类型参数 */
export type GenericType<Name, City, Age> = {
  name: Name
  city: City
  age: Age
}

/** 泛型默认参数 */
export type ApiRequest<T, Method = 'GET'> = {
  data: T
  method: Method
}
