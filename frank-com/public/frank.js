// const request =new XMLHttpRequest
// request.open('GET','http://qq.com:8888/friends.json')
// request.onreadystatechange=()=>{
// if(request.readyState===4&&request.status===200){
//     console.log(request.response)
// }
// }
// request.send()


// JSONP 方法1 赋值版本
// const script= document.createElement('script')
// script.src = 'http://qq.com:8888/friends.js'
// script.onload=()=>{
//     console.log(window.xxx)
// }
// document.body.appendChild(script) 


window.xxx = (data)=>{
    console.log(data)
}
const script= document.createElement('script')
script.src = 'http://qq.com:8888/friends.js'
document.body.appendChild(script) 