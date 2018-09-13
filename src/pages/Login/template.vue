<template>
    <div id="login">
        <x-layout x-height="100vh">
            <x-header class="x-header">
                <x-row>
                    <x-col span="2" :pc="{span:4,offset:0}" :wpc="{span:6,offset:0}"></x-col>
                    <x-col span="20" :pc="{span:16,offset:0}" :wpc="{span:12,offset:0}">
                        <div class="header-inner">
                            <div class="logo">LET'S SHARE</div>
                            <p>分享才是网络精神</p>
                        </div>
                    </x-col>
                    <x-col span="2" :pc="{span:4,offset:0}" :wpc="{span:6,offset:0}"></x-col>
                </x-row>
            </x-header>
            <x-content class="x-content">
                <x-row>
                    <x-col span="2" :pc="{span:4,offset:0}" :wpc="{span:6,offset:0}"></x-col>
                    <x-col span="20" :pc="{span:16,offset:0}" :wpc="{span:12,offset:0}">
                        <div class="content-inner" style="border:1px solid red;">
                            <div class="btn">
                                <x-button class="x-button" @click="currentForm=true">登录</x-button>
                                <x-button class="x-button" @click="currentForm=false">注册</x-button>
                            </div>
                            <div class="login-form" v-if="currentForm">
                                <form class="x-form">
                                    <div class="form-row">
                                        <p>用户名</p>
                                        <x-input></x-input>
                                    </div>
                                    <div class="form-row">
                                        <p>密码</p>
                                        <x-input></x-input>
                                    </div>
                                    <div class="form-row">
                                        <x-button @click="onClick">立即登录</x-button>
                                    </div>
                                </form>
                                <p>没有账号?立即注册</p>
                            </div>
                            <div class="register-form" v-else>
                                <form class="x-form">
                                    <div class="form-row">
                                        <p>用户名</p>
                                        <x-input></x-input>
                                    </div>
                                    <div class="form-row">
                                        <p>密码</p>
                                        <x-input></x-input>
                                    </div>
                                    <div class="form-row">
                                        <x-button>立即注册</x-button>
                                    </div>
                                </form>
                                <p>已有账号?立即登录</p>
                            </div>

                        </div>
                    </x-col>
                    <x-col span="2" :pc="{span:4,offset:0}" :wpc="{span:6,offset:0}"></x-col>
                </x-row>
            </x-content>
            <x-footer class="x-footer">
                <x-row>
                    <x-col span="2" :pc="{span:4,offset:0}" :wpc="{span:6,offset:0}"></x-col>
                    <x-col span="20" :pc="{span:16,offset:0}" :wpc="{span:12,offset:0}">
                        <p>© xiedaimala.com 2018 wechat: xiedaimala01</p>
                    </x-col>
                    <x-col span="2" :pc="{span:4,offset:0}" :wpc="{span:6,offset:0}"></x-col>
                </x-row>
            </x-footer>
        </x-layout>
    </div>
</template>

<script src="./template.js">
</script>

<style scoped lang="scss" src="./template.scss">
</style>