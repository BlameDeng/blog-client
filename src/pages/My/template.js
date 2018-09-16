import { mapActions } from "vuex";
import Vue from 'vue';
import Button from '../../components/button';
import Icon from '../../components/icon';
import Toast from '../../components/toast';
export default {
    name: "MyPage",
    components: { 'x-button': Button, 'x-icon': Icon },
    data() {
        return {
            ToastConstructor: Vue.extend(Toast),
            userId: "",
            indexBlogs: [],
            user: {},
            totalPage: 0,
            currentIndex: 0,
            start: 0,
            pageSize: 5, //每页显示页码数量
            isMask: false,
            deleteBlogId: ''
        };
    },
    computed: {
        end() {
            if (this.start + this.pageSize > this.totalPage) {
                return this.totalPage;
            }
            return this.start + this.pageSize - 1;
        }
    },
    created() {
        this.userId = this.$route.query.redirect;
        this.getBlogsByUserId({ userId: this.userId, page: 1 })
            .then(res => {
                this.indexBlogs = res.data;
                if (this.indexBlogs[0]) {
                    this.user = this.indexBlogs[0].user;
                }
                this.totalPage = +res.totalPage;
            })
            .catch(() => {});
    },
    methods: {
        ...mapActions(["getBlogsByUserId", "deleteBlog"]),
        updateIndexBlogs(index) {
            this.getBlogsByUserId({ userId: this.userId, page: index + 1 }).then(
                res => {
                    this.indexBlogs = res.data;
                    this.totalPage = +res.totalPage;
                    this.watchCurrentIndex();
                }
            );
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
        onClickDelte(deleteBlogId) {
            this.isMask = true;
            this.deleteBlogId = deleteBlogId;
        },
        deleteCancle() {
            this.isMask = false;
            this.deleteBlogId = '';
        },
        deleteConfirm() {
            this.isMask = false;
            this.deleteBlog({ blogId: this.deleteBlogId }).then(res => {
                this.showToast('success', res.msg);
                this.indexBlogs = this.indexBlogs.filter(blog => blog.id !== this.deleteBlogId);
            }).catch(() => {});
        },
        pre() {
            if (this.currentIndex === 0) {
                return;
            }
            this.currentIndex -= 1;
            this.updateIndexBlogs(this.currentIndex);
        },
        next() {
            if (this.currentIndex === this.totalPage - 1) {
                return;
            }
            this.currentIndex += 1;
            this.updateIndexBlogs(this.currentIndex);
        },
        onClickIndex(index) {
            this.currentIndex = index;
            this.updateIndexBlogs(index)
        },
        watchCurrentIndex() {
            let middle = this.start + Math.floor((this.pageSize - 1) / 2);
            if (this.currentIndex <= this.pageSize / 2) {
                this.start = 0;
            } else if (
                this.currentIndex >=
                this.totalPage - Math.floor((this.pageSize - 1) / 2)
            ) {
                return;
            } else {
                this.start = this.start + this.currentIndex - middle;
            }
        },
        showToast(type, msg) {
            let div = document.createElement('div');
            document.body.appendChild(div);
            let toast = new this.ToastConstructor({
                propsData: { autoClose: 3, type: type, info: msg, closeButton: false }
            }).$mount(div);
        }
    }
};