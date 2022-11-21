/**
 * @Author liming
 * @Date 2022/11/18 19:52
 **/

import {track,trigger} from './effect'
export const reactive = <T extends object>(target:T)=>{
    // @ts-ignore
    return new Proxy(target,{
        get(target, key, receiver) {
            let res = Reflect.get(target, key, receiver)
            track(target,key)
            return res;
        },
        set(target, key, value, receiver) {
            let res = Reflect.set(target, key, value,receiver)
            trigger(target,key)
            return res;
        },
    })
}
