<template>
    <div id="detail">
        <x-layout x-min-height="100vh">
            <x-header></x-header>
            <x-content>
                <div class="content-inner">
                    <div class="title-info">
                        <img :src="user.avatar">
                        <div class="blog-title">
                            <h3>{{blog.title}}</h3>
                            <span class="username">
                                <router-link to="/">{{user.username}}</router-link>
                            </span>
                            <span class="created-at">{{blog.createdAt}}</span>
                        </div>
                    </div>
                    <div class="blog-content" v-html="markedContent"></div>
                </div>
            </x-content>
            <x-footer class="x-footer"></x-footer>
        </x-layout>
    </div>
</template>

<script src="./template.js">
</script>

<style scoped lang="scss" src="./template.scss">
</style>