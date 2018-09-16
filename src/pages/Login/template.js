import Input from '../../components/input';
import Button from '../../components/button';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'LoginPage',
    components: { 'x-input': Input, 'x-button': Button },
    data() {
        return {
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
    methods: {
        ...mapActions(['login']),
        onLogin() {
            this.formValidator().then(() => {
                this.login({ username: this.username, password: this.password }).then(res => {
                    this.$showToast('success', res.msg);
                    this.$router.push({ path: this.$route.query.redirect || '/' });
                }).catch(res => {
                    if (res.status === 'fail') {
                        this.$showToast('error', res.msg);
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
                    this.$showToast('error', usernameMsg);
                    reject();
                } else if (!regexpPassword.test(this.password)) {
                    this.$showToast('error', passwordMsg);
                    reject();
                };
                resolve();
            })
        }
    }
}