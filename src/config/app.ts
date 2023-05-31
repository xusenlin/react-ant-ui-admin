export enum EnvModeEnum {
  Dev = "development",//开发环境
  Test = "test",
  Pre = "pre",
  Pro = "production",
}

export const version:string = "0.01"

export const storagePrefixKey:string = "BERRY_FORM:"

export const appName:string = "表单报表系统"

//当前处于什么环境
export const envMode: EnvModeEnum = import.meta.env.MODE as EnvModeEnum
