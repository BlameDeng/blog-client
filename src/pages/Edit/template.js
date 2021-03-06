import Textarea from '../../components/textarea';
import Input from '../../components/input';
import Button from '../../components/button';
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
        ...mapActions(['getDetail', 'updateBlog']),
        onUpdateBlog() {
            this.updateBlog({ blogId: this.blogId, title: this.title, description: this.description, content: this.content, atIndex: this.atIndex }).then(
                res => {
                    this.$showToast('success', res.msg);
                    this.$router.push({ path: `/my/`, query: { redirect: this.user.id } });
                }
            ).catch(() => {});
        },
        toggleAtIndex() { this.atIndex = !this.atIndex; }
    }
}