import {getToken} from "@/utils/user.ts"
import {toFormData} from "@/utils/app.ts"
import axios, {InternalAxiosRequestConfig} from "axios";
import {baseURL, timeout, statusDesc} from "@/config/request.ts"
import { message } from 'antd';
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {RequestData} from "@ant-design/pro-table/es/typing";

declare module 'axios' {
  export interface AxiosRequestConfig {
    // closeLoading?:boolean,//默认所有请求Loading，可关闭
    token?: string,//默认获取本地token，可针对某个请求写死或置空
    isFormRequest?: boolean,//将请求自动转换为表单请求
  }
}

export type ResponseResult<T> = {
  code: number;
  msg: string;
  data: T;
};



const commonRequestInterceptors = (config: InternalAxiosRequestConfig) => {
  if ("token" in config) {
    config.headers.Authorization = config.token
  } else {
    config.headers.Authorization = getToken()
  }
  if (config.isFormRequest) {
    config.transformRequest = toFormData
  }
  return config;
}
const commonRequestErrInterceptors =  (err: any) => {
  message.error(err)
  return Promise.reject(err);
}

const commonResponseErrInterceptors =  (err: any) => {
  let msg = "";
  if (statusDesc[err.response.status]) {
    msg = statusDesc[err.response.status]
  } else {
    msg = `连接出错(${err.response.status})!`
  }
  message.error(msg)
  return Promise.reject(err.response);
}


export class Request {
  instance: AxiosInstance;//不做任何处理的请求,需要自己处理http错误和业务错误
  instanceOk: AxiosInstance;//根据业务自动报错，只有成功才会返回需要的数据
  instanceProTable: AxiosInstance;//专门用于proTable组件的分页请求
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.instanceOk = axios.create(config);
    this.instanceProTable = axios.create(config);
    this.instance.interceptors.request.use(commonRequestInterceptors);
    this.instanceOk.interceptors.request.use(commonRequestInterceptors, commonRequestErrInterceptors);
    this.instanceProTable.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      if ("token" in config) {
        config.headers.Authorization = config.token
      } else {
        config.headers.Authorization = getToken()
      }
      if (config.isFormRequest) {
        config.transformRequest = toFormData
      }

        //是PorTable分页请求需要将PorTable的分页参数和自己业务的参数对其
        let current = config.data.current
        config.data.current = undefined
        config.data.pageNum = current


      return config;
    }, commonRequestErrInterceptors);

    this.instanceOk.interceptors.response.use(
        (res: AxiosResponse) => {
          //这里根据业务代码进行处理正确的数据
          const resData = res.data
          if (resData.code === "A0234"){
            message.warning("请重新登录系统")
            return
          }
          if (resData.code != "00000") {
            message.error(resData.msg);
            return
          }
          return resData.data;
        },
        commonResponseErrInterceptors,
    );
    this.instanceProTable.interceptors.response.use(
        (res: AxiosResponse) => {
          //这里根据业务代码进行处理正确的数据
          const resData = res.data
          if (resData.code === "A0234"){
            message.warning("请重新登录系统")
            return
          }
          if (resData.code != "00000") {
            message.warning(resData.msg);
            return
          }
          let  result = resData.data
          return {
            data: result.records||[],
            success: true,
            total: parseInt(result.total),
          };
        },
        commonResponseErrInterceptors,
    );
  }


  public request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<ResponseResult<T>>> {
    return this.instance.request(config);
  }


  public requestOk<T>(config: AxiosRequestConfig): Promise<T> {
    return this.instanceOk.request(config);
  }

  public requestProTable<T>(config: AxiosRequestConfig): Promise<Partial<RequestData<T>>> {

    return this.instanceProTable.request(config);
  }
}

const instance= new Request({baseURL, timeout})

export default instance


//未拦截请求，响应原封不动返回
export const request = <T>(config: AxiosRequestConfig)  => instance.request<T>(config)
//做了拦截处理，自动报错，只返回关心的数据
export const requestOk = <T>(config: AxiosRequestConfig) => instance.requestOk<T>(config)
//proTable组件的分页请求
export const requestProTable = <T>(config: AxiosRequestConfig) => instance.requestProTable<T[]>(config)

