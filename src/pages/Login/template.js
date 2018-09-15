import Toast from '../../components/toast';
import Vue from 'vue';
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
export default {
    data() {
        return {
            ToastConstructor: Vue.extend(Toast),
            username: '',
            password: ''
        }
    },
    computed: {
        ...mapState({
            user: state => state.auth.user,
            isLogin: state => state.auth.isLogin
        })
    },
    created() {
    },
    methods: {
        ...mapActions(['login']),
        onLogin() {
            this.formValidator().then(() => {
                this.login({ username: this.username, password: this.password }).then(res => {
                    this.showToast('success', res.msg);
                    this.$router.push({ path: this.$route.query.redirect || '/' });
                }).catch(res => {
                    if (res.status === 'fail') {
                        this.showToast('error', res.msg);
                    }
                })
            }, () => {})
        },
        onPushToRegister() {
            this.$router.push({ path: '/register' });
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
                };
                resolve();
            })
        },
        showToast(type, msg) {
            let div = document.createElement('div');
            document.body.appendChild(div);
            let toast = new this.ToastConstructor({
                propsData: { autoClose: 5, type: type, info: msg, closeButton: false }
            }).$mount(div);
        }
    },
    mounted() {

    },
}