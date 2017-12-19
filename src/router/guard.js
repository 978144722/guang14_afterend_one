//因为这不是组件，没有组件实例，自然没有this.$http
import axios from 'axios';
//$http无法使用$api也无法使用 需要手动引入
import apiConfig from '../js/api_config.js';
//改模块向外导出一个路由守卫函数
export default function (to, from, next) {
    console.log(to);
    console.log(from);
    //   next(false);
    next();
    // 10.45
    axios.get(apiConfig.islogin).then(rsp => {
        let isLogin = rsp.data.code == 'logined';
        let toPage = to.name;
        if (toPage == 'l') {
            if (isLogin) {
                next('/');//已登录转首页
            } else {
                next(); //允许访问
            }
        }
        if (toPage != 'l') {
            if (isLogin) {
                next('/');//已登录转首页
            } else {
                next(); //允许访问
            }
        }
    })

};