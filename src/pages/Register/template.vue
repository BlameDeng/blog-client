<template>
    <div id="register">
        <x-layout x-height="100vh">
            <x-header class="x-header">
                <x-row>
                    <x-col span="20" offset="2" :pc="{span:16,offset:4}" :wpc="{span:12,offset:6}">
                        <div class="header-inner">
                            <div class="logo">LET'S SHARE</div>
                            <div class="register-title">
                                注册 LET'S SHARE 账号
                            </div>
                        </div>
                    </x-col>
                </x-row>
            </x-header>
            <x-content class="x-content">
                <x-row>
                    <x-col span="20" offset="2" :pc="{span:16,offset:4}" :wpc="{span:12,offset:6}">
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
                                <x-button @click="onClick">立即注册</x-button>
                            </div>
                            <p>已有账号?<span>立即登录</span></p>
                        </div>
                    </x-col>
                </x-row>
            </x-content>
            <x-footer class="x-footer">
                <x-row>
                    <x-col span="20" offset="2" :pc="{span:16,offset:4}" :wpc="{span:12,offset:6}">
                        <p>© xiedaimala.com 2018 wechat: xiedaimala01</p>
                    </x-col>
                </x-row>
            </x-footer>
        </x-layout>
    </div>
</template>

<script src="./template.js">
</script>

<style scoped lang="scss" src="./template.scss">
</style>