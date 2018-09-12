import request from '@/helpers/request.js';
import auth from '@/api/auth.js';
import blog from '@/api/blog.js';


export default {
    name: 'Index',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
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