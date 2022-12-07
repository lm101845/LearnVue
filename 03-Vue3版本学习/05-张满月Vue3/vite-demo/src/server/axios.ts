/**
 * @Author liming
 * @Date 2022/12/7 20:59
 **/
export const axios = {
    get<T>(url: string):Promise<T>{
        return new Promise((resolve)=>{
            //这里只封装了resolve
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url)
            xhr.onreadystatechange = ()=>{
                if(xhr.readyState === 4 && xhr.status === 200){
                    JSON.parse(xhr.responseText)
                    setTimeout(()=>{
                        //模拟一下请求，不然请求太快，看不到效果
                        resolve(JSON.parse(xhr.responseText));
                    },2000)
                }
            }
            xhr.send(null);
        })
    }
}
