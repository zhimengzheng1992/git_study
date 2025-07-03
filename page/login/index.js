if(process.env.NODE_ENV === 'production'){
  console.log = function () {}
}
console.log('在开发模式下好用,生产模式下失效')

import { checkCode, checkPhone } from "../utils/check.js";
console.log(checkCode('123456'))
console.log(checkPhone('1'))

// document.querySelector('.btn').addEventListener('click', () => {
//     const phone = document.querySelector('.login-form [name=mobile]').value
//     const code = document.querySelector('.login-form [name=code]').value

//     if(!checkPhone(phone)){
//         console.log('phone fail')
//         return
//     }

//     if(!checkCode(code)){
//         console.log('code fail')
//         return
//     }

//     console.log('submit to server')
// })

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './index.less'
import imgObj from './assets/logo.png'
const theImg = document.createElement('img')
theImg.src = imgObj
document.querySelector('.login-wrap').appendChild(theImg)

import myAxios from '../utils/request.js'
// const myAxios = myAxiosModule.default~
import { myAlert } from "../utils/alert.js";
document.querySelector('.btn').addEventListener('click', () => {
    const phone = document.querySelector('.login-form [name=mobile]').value
    const code = document.querySelector('.login-form [name=code]').value

    if(!checkPhone(phone)){
        myAlert(false, 'phone fail, must be 11')
        console.log('phone fail')
        return
    }

    if(!checkCode(code)){
        myAlert(false, 'code fail, must be 6')
        console.log('code fail')
        return
    }

    myAxios({
        url: '/v1_0/authorizations',
        method: 'POST',
        data:{
            mobile: phone,
            code: code
        }
    }).then(result => {
        myAlert(true, 'login successful')
        localStorage.setItem('token', result.data.token)
        location.href = '../content/index.html'
    }).catch(error => {
        myAlert(false, error.response.data.message)
    })
    console.log('submit to server')
})

console.warn('观察页面是否更新')

import yourAxios from '@/utils/request.js'
console.log(yourAxios)