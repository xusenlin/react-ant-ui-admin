import { request,unhandledRequest } from "@/utils/request.ts";

export function wechatSignatureApi(params:{name:string}){
  return request<string[]>({
    url: "/sms-service/wechat/getConfigData",
    method: "get",
    params: params
  });
}
export function Q(params:{name:string}){
  return unhandledRequest<string[]>({
    url: "/sms-service/wechat/getConfigData",
    method: "get",
    params: params,
  });
}

Q({name:""}).then(r=>{
  r.data
})

wechatSignatureApi({name:""}).then(r=>{
 console.log(r)
})
