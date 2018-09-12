<template>
    <div id="login">
        <x-layout x-height="100vh">
            <x-header class="x-header">
                <x-row>
                    <x-col span="2" :pc="{span:4,offset:0}" :wpc="{span:6,offset:0}"></x-col>
                    <x-col span="20" :pc="{span:16,offset:0}" :wpc="{span:12,offset:0}">
                        <div class="header-inner">
                            <div class="logo">LET'S SHARE</div>
                            <p>精品博客汇聚</p>
                            <div class="btn">
                                <x-button class="x-button">立即登录</x-button>
                                <x-button class="x-button">注册账号</x-button>
                            </div>
                        </div>
                    </x-col>
                    <x-col span="2" :pc="{span:4,offset:0}" :wpc="{span:6,offset:0}"></x-col>
                </x-row>
            </x-header>
            <x-content>
                <x-row x-height="100%">
                    <x-col span="2" :pc="{span:4,offset:0}" :wpc="{span:6,offset:0}"></x-col>
                    <x-col span="20" :pc="{span:16,offset:0}" :wpc="{span:12,offset:0}" x-height="100%">
                        <div class="content-inner" style="border:1px solid red;height:100px;">
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