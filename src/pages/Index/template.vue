<template>
    <div id="index">
        <x-layout x-height="100vh">
            <x-header tips-txt="index"></x-header>
            <x-content>
                <div class="content-inner">
                    <div class="login-register" v-if="!isLogin">
                        <span @click="onPushToLogin">登录</span><span @click="onPushToRegister">注册</span>
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