<template>
    <div id="login">
        <x-layout x-min-height="100vh">
            <x-header tips-txt="login"></x-header>
            <x-content class="x-content">
                <div class="content-inner">
                    <div class="form-row">
                        <p>用户名</p>
                        <x-input class="x-input" v-model="username" :auto-focus="true"></x-input>
                    </div>
                    <div class="form-row">
                        <p>密码</p>
                        <x-input class="x-input" v-model="password" @keyup.enter.native="onLogin"></x-input>
                    </div>
                    <div class="form-row">
                        <x-button @click="onLogin">立即登录</x-button>
                    </div>
                    <p>没有账号?<span @click="onPushToRegister">立即注册</span></p>
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