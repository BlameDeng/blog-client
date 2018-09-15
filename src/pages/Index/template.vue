<template>
    <div id="index">
        <x-layout x-min-height="100vh">
            <x-header tips-txt="index"></x-header>
            <x-content>
                <div class="content-inner">
                    <div v-for="(blog,index) in indexBlogs" class="blog-info">
                        <div class="user">
                            <img :src="blog.user.avatar">
                            <p>{{blog.user.username}}</p>
                        </div>
                        <div class="blog-content">
                            <h3>{{blog.title}}</h3>
                            <span>{{blog.createdAt}}</span>
                            <p>{{blog.description}}</p>
                        </div>
                    </div>
                    <ul class="page-index-bar">
                        <li @click="goPageIndex(0)">首页</li>
                        <li @click="pre">上一页</li>
                        <li v-for="(n,index) in totalPage" :data-index="index" @click="onClickIndex(index)" v-if="index>=start&&index<=end" :class="{active:currentIndex===index}">{{n}}</li>
                        <li @click="next">下一页</li>
                        <li @click="goPageIndex(1)">尾页</li>
                        <span>第{{currentIndex+1}} / {{totalPage}}页</span>
                    </ul>
                </div>
            </x-content>
            <x-footer></x-footer>
        </x-layout>
    </div>
</template>
<script src="./template.js">
</script>
<style scoped lang="scss" src="./template.scss">
</style>