/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string
  }
}

declare module '*.module.less' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
  declare module '*.less'
}
