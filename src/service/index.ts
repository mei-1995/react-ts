import { BASE_URL, TIME_OUT } from './config'
import Request from './request'
import { AxiosResponse } from 'axios'
import { Permissions } from './type'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export const getPermissonList = async (): Promise<
  AxiosResponse<Permissions[]>
> => {
  try {
    const res: AxiosResponse<Permissions[]> = await request.get<
      AxiosResponse<Permissions[]>
    >({
      url: '/permissions'
    })
    return res
  } catch (err: any) {
    throw new Error(err)
  }
}

export default request
