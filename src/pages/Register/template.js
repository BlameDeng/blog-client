import Toast from '../../components/toast';
import Input from '../../components/input';
import Button from '../../components/button';
import Vue from 'vue';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    name: 'RegisterPage',
    components: { 'x-input': Input, 'x-button': Button },
    data() {
        return {
            ToastConstructor: Vue.extend(Toast),
            username: '',
            password: ''
        }
    },
    computed: {
        local() {},
        ...mapState({
            count: (state) => { return state.count },
            num: 'number',
            arrary: 'arrary'
        }),
        ...mapGetters(['both', 'bothtwo', 'getByIndex'])
    },
    methods: {
        ...mapMutations(['increment', 'unshift', 'push']),
        ...mapActions(['register']),
        onRegister() {
            this.formValidator().then(() => {
                this.register({ username: this.username, password: this.password }).then(res => {
                    this.showToast('success', '注册成功');
                    this.onPushToIndex();
                }, res => {
                    if (res.status === 'fail') {
                        this.showToast('error', res.msg);
                    }
                });
            }, (error) => {})
        },
        onPushToLogin() {
            this.$router.push({ path: '/login' });
        },
        onPushToIndex() {
            this.$router.push({ path: '/' })
        },
        formValidator() {
            return new Promise((resolve, reject) => {
                let regexpUsername = /^[\w\u4e00-\u9fa5]{1,15}$/;
                let regexpPassword = /^.{6,16}$/;
                let usernameMsg = '用户名为长度1到15的字符，只能是字母、数字、下划线或汉字';
                let passwordMsg = '密码为长度6到16的字符';
                if (!regexpUsername.test(this.username)) {
                    this.showToast('error', usernameMsg);
                    reject();
                } else if (!regexpPassword.test(this.password)) {
                    this.showToast('error', passwordMsg);
                    reject();
                }
                resolve();
            })
        },
        showToast(type, msg) {
            let div = document.createElement('div');
            document.body.appendChild(div);
            let toast = new this.ToastConstructor({
                propsData: {
                    autoClose: 3,
                    type: type,
                    info: msg,
                    closeButton: false
                }
            }).$mount(div);
        }
    }
}