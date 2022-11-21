/**
 * @Author liming
 * @Date 2022/11/18 19:57
 **/
let activeEfect;
export const effect = (fn:Function)=>{
    const _effect = function (){
        activeEfect = _effect
        fn()
    }
    _effect()
}

const targetMap = new WeakMap()
export const track = (target,key)=>{
    let depsMap = targetMap.get(target)
    if(!depsMap){
        depsMap = new Map();
        targetMap.set(key)
    }
    let deps = depsMap.get(key);
    if(!deps){
        deps = new Set();
        depsMap.set(key,deps)
    }
    deps.add(activeEfect)  //完成依赖收集
}

export const trigger = (target,key)=>{
    const depsMap = targetMap.get(target)
    const deps = depsMap.get(key)
    deps.forEach(effect=>effect())
}
