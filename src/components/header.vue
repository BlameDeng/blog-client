<template>
    <div class="header" :style="xStyle" :class="{['login-register']:!isLogin}">
        <x-row>
            <x-col span="20" offset="2" :pc="{span:16,offset:4}" :wpc="{span:12,offset:6}">
                <div class="header-inner">
                    <div class="logo-wrapper">
                        <div class="logo">LET'S SHARE</div>
                        <template v-if="!isLogin">
                            <div class="logotitle">汇聚精品博客</div>
                            <div class="logoinfo">{{txt}}</div>
                        </template>
                    </div>
                    <div class="user-bar" v-if="isLogin">
                        <x-icon name="blog" class="x-icon"></x-icon><img :src="this.user.avatar" alt="">
                        <x-icon name="down" class="x-icon"></x-icon>
                    </div>
                </div>
            </x-col>
        </x-row>
    </div>
</template>
<script>
    import Icon from './icon';
    import Col from './col';
    import Row from './row';
    import { mapState } from 'vuex';
    export default {
        name: 'xHeader',
        components: { 'x-icon': Icon, 'x-col': Col, 'x-row': Row },
        props: {
            xHeight: { type: String, default: '' },
            xWidth: { type: String, default: '' },
            xBg: { type: String, default: '' },
            tipsTxt: { type: String, default: '' }
        },
        computed: {
            ...mapState({
                user: state => state.auth.user,
                isLogin: state => state.auth.isLogin
            }),
            xStyle() {
                let { xHeight, xWidth, xBg } = this;
                return { width: xWidth, height: xHeight, backgroundColor: xBg }
            },
            txt() {
                if (this.tipsTxt === 'login') {
                    return `登录 LET'S SHARE`;
                } else if (this.tipsTxt === 'register') { return `注册 LET'S SHARE`; }
            }
        },
        created() {},
    }
</script>
<style lang="scss" scoped>
    @import '../assets/base.scss';
    .header {
        font-family: $font;
        background: $bcolor3;
        color: #fff;
        padding: 30px 0 10px 0;
        .header-inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            >.logo-wrapper {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                >.logo {
                    font-size: 40px;
                    font-weight: bold;
                }
                >.logoinfo {
                    font-size: 16px;
                    margin-left: 5px;
                    padding-left: 5px;
                    border-left: 2px solid #ddd;
                }
            }
            >.user-bar {
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    width: 40px;
                    border-radius: 50%;
                    vertical-align: middle;
                    cursor: pointer;
                }
                .x-icon {
                    width: 25px;
                    height: 25px;
                    cursor: pointer;
                    margin-right: 20px;
                }
            }
        }
        &.login-register {
            padding: 100px 0 50px;
            justify-content: center;
            .header-inner {
                justify-content: center;
                >.logo-wrapper {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    >.logo {
                        font-size: 50px;
                        align-self: flex-start;
                    }
                    >.logotitle{
                        font-size: 25px;
                        align-self: center;
                        margin: 30px auto;
                    }
                    >.logoinfo {
                        font-size: 18px;
                        align-self: flex-end;
                    }
                }
            }
        }
    }
</style>