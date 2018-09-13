<template>
    <div id="index">
        <x-layout x-height="100vh">
            <x-header></x-header>
            <x-content>
                <div class="content-inner">
                    <div class="mask" v-if="!isLogin">
                        跳转注册登录
                    </div>
                </div>
            </x-content>
            <x-footer>
            </x-footer>
        </x-layout>
    </div>
</template>
<script src="./template.js">
</script>
<style scoped lang="scss" src="./template.scss">
</style>