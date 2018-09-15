<template>
    <div id="create">
        <x-layout x-min-height="100vh">
            <x-header></x-header>
            <x-content>
                <div class="content-inner">
                    <h2>创建文章</h2>
                    <h4>文章标题</h4>
                    <x-input x-width="100%" :auto-focus="true" v-model="title"></x-input>
                    <p>限 <span>{{title.length}}</span> / 30 个字</p>
                    <h4>内容简介</h4>
                    <x-textarea v-model="description" class="description-text" x-width="100%" x-height="50px"></x-textarea>
                    <p>限 <span>{{description.length}}</span> / 60 个字</p>
                    <h4>文章内容</h4>
                    <x-textarea v-model="content" class="content-text" x-width="100%" x-height="200px"></x-textarea>
                    <div class="switch-wrapper"><span>是否展示到首页</span><span class="index-switch" :class="{active:atIndex}" @click="toggleAtIndex"></span></div>
                    <x-button @click="onCreateBlog">确定</x-button>
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