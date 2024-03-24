import React from 'react'
import { ComponentType } from 'react'
import { Permission } from '../../App'
import { Permissions } from '../../service/type'

const HocPermission = (authrazation: string) => {
  return function <P>(Component: ComponentType<P>) {
    return function Home(props: P) {
      const mathPermission = (value: string, list: Permissions[]) => {
        return list.map((item) => item.title).includes(value)
      }

      return (
        <Permission.Consumer>
          {(permissionList) =>
            mathPermission(authrazation, permissionList) ? (
              <Component {...(props as any)} />
            ) : (
              <div>no Auth</div>
            )
          }
        </Permission.Consumer>
      )
    }
  }
}

export default HocPermission
