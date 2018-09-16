import { mapActions } from 'vuex';
import marked from 'marked';
export default {
    name: 'DetailPage',
    data() {
        return {
            blogId: '',
            blog: {},
            user: {},
            markedContent: ''
        }
    },
    computed: {},
    created() {
        this.blogId = this.$route.params.blogId;
        this.getDetail(this.blogId).then(res => {
            if (res.status === 'ok') {
                this.blog = res.data;
                this.user = res.data.user;
                this.markedContent = marked(this.blog.content);
            }
        }).catch(() => {});
    },
    methods: {
        ...mapActions(['getDetail']),
    }
}