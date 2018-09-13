import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
export default {
    name: 'Index',
    data() { return {} },
    computed: {
        ...mapState({
            user: state => state.auth.user,
            isLogin: state => state.auth.isLogin
        })
    },
    created() {
        console.log(this.user);
        console.log(this.isLogin);
    },
    methods: {
        onClick() {
            // request('/auth/login', 'POST', { username: 'hunger1', password: '1234567' })

            // auth.login({ username: 'hunger1', password: '123456' })
            blog.getBlogs().then(response => {
                console.log('验证通过');
                console.log(response);
                this.$message.success('验证通过');
            }).catch(response => {
                console.log('验证未通过');
                console.log(response);
                this.$message.warning('验证未通过');
            })
        }
    }
}