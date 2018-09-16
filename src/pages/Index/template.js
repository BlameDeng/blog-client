import { mapState, mapActions } from 'vuex';
export default {
    name: 'Index',
    data() {
        return {
            indexBlogs: [],
            totalPage: undefined,
            currentIndex: 0,
            start: 0,
            pageSize: 5 //每页显示页码数量
        }
    },
    computed: {
        ...mapState({
            user: state => state.auth.user,
            isLogin: state => state.auth.isLogin
        }),
        end() {
            if (this.start + this.pageSize > this.totalPage) { return this.totalPage; }
            return this.start + this.pageSize - 1;
        }
    },
    created() {
        if (this.$route.query.page) {
            let defaultPage = this.$route.query.page
            this.currentIndex = defaultPage - 1;
            this.updateIndexBlogs(defaultPage - 1);
        }

        this.getIndexBlogs().then(res => {
            this.indexBlogs = res.data;
            this.totalPage = +res.totalPage;
        })
    },
    methods: {
        ...mapActions(['getIndexBlogs']),
        onClickIndex(index) {
            this.currentIndex = index;
            this.updateIndexBlogs(index)
        },
        updateIndexBlogs(index) {
            this.getIndexBlogs(index + 1).then(res => {
                this.indexBlogs = res.data;
                this.totalPage = +res.totalPage;
                this.$router.push({ path: '/', query: { page: index + 1 } });
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