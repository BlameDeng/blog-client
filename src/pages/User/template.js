import { mapActions } from 'vuex';
export default {
    name: 'UserPage',
    data() {
        return {
            userId: '',
            indexBlogs: [],
            totalPage: undefined,
            currentIndex: 0,
            start: 0,
            pageSize: 5 //每页显示页码数量
        }
    },
    computed: {
        end() {
            if (this.start + this.pageSize > this.totalPage) { return this.totalPage; }
            return this.start + this.pageSize - 1;
        }
    },
    created() {
        this.userId = this.$route.params.userId;
        this.getBlogsByUserId({ userId: this.userId, page: 1, atIndex: false }).then(res => {
            this.indexBlogs = res.data;
            this.totalPage = +res.totalPage;
        }).catch(() => {})
    },
    methods: {
        ...mapActions(['getBlogsByUserId']),

        updateIndexBlogs(index) {
            this.getBlogsByUserId({ userId: this.userId, page: index + 1, atIndex: false }).then(res => {
                this.indexBlogs = res.data;
                this.totalPage = +res.totalPage;
                this.watchCurrentIndex();
            })
        },
        goPageIndex(n) {
            if (n === 0) {
                this.currentIndex = 0;
            } else if (n === 1) {
                this.currentIndex = this.totalPage - 1;
                this.start = this.currentIndex - this.pageSize + 1;
            }
            this.updateIndexBlogs(this.currentIndex);
        },
        pre() {
            if (this.currentIndex === 0) {
                return
            }
            this.currentIndex -= 1;
            this.updateIndexBlogs(this.currentIndex);
        },
        next() {
            if (this.currentIndex === this.totalPage - 1) {
                return
            }
            this.currentIndex += 1;
            this.updateIndexBlogs(this.currentIndex);
        },
        watchCurrentIndex() {
            let middle = this.start + Math.floor((this.pageSize - 1) / 2);
            if (this.currentIndex <= this.pageSize / 2) {
                this.start = 0;
            } else if (this.currentIndex >= this.totalPage - Math.floor((this.pageSize - 1) / 2)) {
                return
            } else {
                this.start = this.start + this.currentIndex - middle;
            }
        }
    }
}