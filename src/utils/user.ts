import Storage from "good-storage";
import {storageTokenKey, storageUserInfoKey} from "@/config/app.ts";
import {User} from "@/store/sliceUser.ts";


export function getUserInfo():User {
  return Storage.get(storageUserInfoKey, {});
}


export function setUserInfo(user:User):User {
  Storage.set(storageUserInfoKey, user);
  return user;
}
export function isLogin() : boolean{
  return Storage.get(storageTokenKey,false)
}

export function getToken():string {
  return "bearer "+Storage.get(storageTokenKey);
}

/**
 * 设置Token
 * @param token
 * @returns {*|undefined}
 */
export function setToken(token:string) : void{
  return Storage.set(storageTokenKey, token);
}

/**
 * 移除Token
 * @returns {*}
 */
export function removeToken():void {
  return Storage.remove(storageTokenKey);
}
