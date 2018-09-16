import axios from 'axios';

axios.defaults.baseURL = 'https://blog-server.hunger-valley.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;
//如果在发送来自其他域的XMLHttpRequest请求之前，未设置withCredentials 为true，
//那么就不能为它自己的域设置cookie值。而通过设置withCredentials 为true获得的第三方cookies，
//将会依旧享受同源策略，因此不能被通过document.cookie或者从头部相应请求的脚本等访问。
//注: 永远不会影响到同源请求
//Note: 不同域下的XmlHttpRequest 响应，不论其Access-Control- header 设置什么值，
//都无法为它自身站点设置cookie值，除非它在请求之前将withCredentials 设为true。

export default function request(url, type = "GET", data = {}) {
    return new Promise((resolve, reject) => {
        let option = { url, method: type };
        if (type.toLowerCase() === "get") {
            option.params = data;
        } else { option.data = data };
        axios(option).then(response => {
            if (response.data.status === "ok") {
                resolve(response.data);
            } else {
                reject(response.data);
            }
        }).catch(error => {
            reject(error);
        })
    })
}
















// // Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

// // Optionally the request above could also be done as
// axios.get('/user', {
//         params: {
//             ID: 12345
//         }
//     })
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });


// axios.post('/user', {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//     })
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });





// // Send a POST request
// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//     }
// });


// // GET request for remote image
// axios({
//         method: 'get',
//         url: 'http://bit.ly/2mTM3nY',
//         responseType: 'stream'
//     })
//     .then(function(response) {
//         response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//     });


// // Send a GET request (default method)
// axios('/user/12345');