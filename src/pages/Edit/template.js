import Textarea from '../../components/textarea';
import Input from '../../components/input';
import Button from '../../components/button';
import Toast from '../../components/toast';
import Vue from 'vue';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'EditPage',
    components: {
        'x-textarea': Textarea,
        'x-input': Input,
        'x-button': Button
    },
    data() {
        return {
            atIndex: false,
            title: '',
            description: '',
            content: '',
            ToastConstructor: Vue.extend(Toast),
            blogId: ''
        }
    },
    computed: {
        ...mapState({
            user: state => state.auth.user
        })
    },
    created() {
        this.blogId = this.$route.params.blogId;
        this.getDetail(this.blogId).then(res => {
            this.title = res.data.title;
            this.description = res.data.description;
            this.content = res.data.content;
            this.atIndex = res.data.atIndex;
        }).catch(() => {});
    },
    methods: {
        ...mapActions(['createBlog', 'getDetail', 'updateBlog']),
        onUpdateBlog() {
            this.updateBlog({ blogId: this.blogId, title: this.title, description: this.description, content: this.content, atIndex: this.atIndex }).then(
                res => {
                    this.showToast('success', res.msg);
                    this.$router.push({ path: `/my/`, query: { redirect: this.user.id } });
                }
            ).catch(() => {});
        },
        showToast(type, msg) {
            let div = document.createElement('div');
            document.body.appendChild(div);
            let toast = new this.ToastConstructor({
                propsData: { autoClose: 5, type: type, info: msg, closeButton: false }
            }).$mount(div);
        },
        toggleAtIndex() { this.atIndex = !this.atIndex; }
    }
}