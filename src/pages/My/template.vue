<template>
    <div id="my">
        <x-layout x-min-height="100vh">
            <x-header></x-header>
            <x-content>
                <div class="content-inner">
                    <div class="user">
                        <div class="avatar-wrapper">
                            <router-link :to="`/user/${user.id}`"><img :src="user.avatar"></router-link>
                        </div>
                        <p class="username">
                            <router-link :to="`/user/${user.id}`">{{user.username}}</router-link>
                        </p>
                    </div>
                    <div v-for="(blog,index) in indexBlogs" class="blog-info">
                        <div class="time">
                            <h2>{{friendlyDate(blog.createdAt,"full").date}}</h2>
                            <p>{{friendlyDate(blog.createdAt,"full").month}}月</p>
                            <span>{{friendlyDate(blog.createdAt,"full").year}}</span>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <router-link :to="`/detail/${blog.id}`">{{blog.title}}</router-link>
                            </h3>
                            <p>
                                <router-link :to="`/detail/${blog.id}`">{{blog.description}}</router-link>
                            </p>
                            <div class="btns">
                                <router-link :to="`/edit/${blog.id}`">
                                    <x-button class="my-btn">编辑</x-button>
                                </router-link>
                                <x-button class="my-btn">删除</x-button>
                            </div>
                        </div>
                    </div>
                    <ul class="page-index-bar">
                        <li @click="goPageIndex(0)">首页</li>
                        <li @click="pre">上一页</li>
                        <li v-for="(n,index) in totalPage" :data-index="index" @click="onClickIndex(index)" v-if="index>=start&&index<=end" :class="{active:currentIndex===index}">{{n}}</li>
                        <li @click="next">下一页</li>
                        <li @click="goPageIndex(1)">尾页</li>
                        <span>第 {{currentIndex+1}} / {{totalPage}} 页</span>
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