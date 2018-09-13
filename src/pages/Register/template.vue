<template>
    <div id="register">
        <x-layout x-height="100vh">
            <x-header tips-txt="register"></x-header>
            <x-content class="x-content">
                <div class="content-inner">
                    <div class="form-row">
                        <p>用户名</p>
                        <x-input class="x-input" v-model="username"></x-input>
                    </div>
                    <div class="form-row">
                        <p>密码</p>
                        <x-input class="x-input" v-model="password"></x-input>
                    </div>
                    <div class="form-row">
                        <x-button @click="onRegister">立即注册</x-button>
                    </div>
                    <p>已有账号?<span @click="onPushToLogin">立即登录</span></p>
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