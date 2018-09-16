import Textarea from '../../components/textarea';
import Input from '../../components/input';
import Button from '../../components/button';
import { mapActions } from 'vuex';
export default {
    name: 'CreatePage',
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
            content: ''
        }
    },
    methods: {
        ...mapActions(['createBlog']),
        onCreateBlog() {
            this.createBlog({ title: this.title, description: this.description, content: this.content, atIndex: this.atIndex }).then(
                res => {
                    this.$showToast('success', res.msg);
                    let blogId = res.data.id;
                    this.$router.push({ path: `/detail/${blogId}`});
                }
            ).catch(() => {});
        },
        toggleAtIndex() { this.atIndex = !this.atIndex; }
    }
}