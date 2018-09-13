import Toast from '../../components/toast';
import Vue from 'vue';
export default {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            ToastConstructor: Vue.extend(Toast),
            username: '',
            password: ''
        }
    },
    methods: {
        onClick() {
            this.formValidator();
        },
        formValidator() {
            let username = this.username;
            let password = this.password;
            let regexpUsername = /^[\w\u4e00-\u9fa5]{1,15}$/;
            let regexpPassword = /^.{6,16}$/;
            let usernameMsg = '用户名为长度1到15的字符，只能是字母、数字、下划线或汉字';
            let passwordMsg = '密码为长度6到16的字符';
            if (!regexpUsername.test(username)) {
                this.showToast('error', usernameMsg);
                return
            } else if (!regexpPassword.test(password)) {
                this.showToast('error', passwordMsg);
            }
        },
        showToast(type, msg) {
            let div = document.createElement('div');
            document.body.appendChild(div);
            let toast = new this.ToastConstructor({
                propsData: {
                    autoClose: 5,
                    type: type,
                    info: msg,
                    closeButton: false
                }
            }).$mount(div);
        }
    }
}