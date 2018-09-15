<template>
    <div class="pagination">
        <div v-for="(item,index) in currentContents">
            <h3>{{item.title}}</h3>
            <p>{{item.description}}</p>
        </div>
        <ul v-if="pageBar">
            <li @click="pre" :class="{'disabled':currentPage === 0}">上一页</li>
            <li v-for="(page,index) in pages" :data-index="index" @click="onClick" :class="{'active':currentPage===index}" v-if="index>=start&&index<=end">{{page}}</li>
            <li @click="next" :class="{'disabled':currentPage === (pages - 1)}">下一页</li>
        </ul>
    </div>
</template>
<script>
    import Vue from 'vue';
    export default {
        name: 'xPagination',
        props: {
            contents: { type: Array, default () { return [] } },
            size: { type: Number, default: 4 }, //每页显示条数
            defaultPage: { type: Number, default: 0 }, //默认显示页数是defaultPage+1
            span: { type: Number, default: 3, validator(value) { return value > 2; } }, //页码按钮数量
            pageBar: { type: Boolean, default: true }
        },
        data() {
            return { currentPage: this.defaultPage, start: 0 }
        },
        computed: {
            total() { return this.contents.length; },
            pages() { return Math.ceil(this.total / this.size); },
            currentContents() {
                let startIndex = this.currentPage * this.size;
                if (this.currentPage === this.pages) {
                    return this.contents.slice(startIndex, this.total);
                }
                return this.contents.slice(startIndex, startIndex + this.size);
            },
            end() { return this.start + this.span - 1; }
        },
        created() {},
        methods: {
            onClick(e) {
                this.currentPage = +e.target.getAttribute('data-index'); //加号变数值，不然类名全等判断会不等。
                this.watchCurrentPage();
            },
            pre() {
                if (this.currentPage === 0) { return }
                this.currentPage -= 1;
                this.watchCurrentPage();
            },
            next() {
                if (this.currentPage === (this.pages - 1)) { return }
                this.currentPage += 1;
                this.watchCurrentPage();
            },
            watchCurrentPage() {
                let middle = Math.floor((this.start + this.start + this.span - 1) / 2);
                if (this.currentPage <= this.span / 2) {
                    this.start = 0;
                } else if (this.currentPage >= this.pages - this.span / 2) {
                    return
                } else { this.start += this.currentPage - middle; }
            }
        },
        mounted() {},
    }
</script>
<style lang="scss" scoped>
    .pagination {
        ul {
            display: flex;
            list-style: none;
            >li {
                padding: .5em 1em;
                border: 1px solid red;
                margin-right: 1px;
                cursor: pointer;
                &.disabled {
                    background: #ddd;
                }
                &.active {
                    color: red;
                }
            }
        }
    }
</style>