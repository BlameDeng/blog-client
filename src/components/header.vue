<template>
    <div class="header" :style="xStyle" :class="{['login-register']:!isLogin}">
        <x-row>
            <x-col span="20" offset="2" :pc="{span:16,offset:4}" :wpc="{span:12,offset:6}">
                <div class="header-inner">
                    <div class="logo-wrapper">
                        <div class="logo" @click="onPushToIndex">LET'S SHARE</div>
                        <template v-if="!isLogin">
                            <div class="logotitle">汇聚精品 WEB 博客</div>
                            <div class="logoinfo">{{txt}}</div>
                        </template>
                    </div>
                    <div class="user-bar" v-if="isLogin">
                        <router-link to="./create">
                            <x-icon name="blog" class="x-icon"></x-icon>
                        </router-link>
                        <x-popover position="bottom" trigger="click">
                            <template slot="content">
                                <div ref="popoverItemWrapper">
                                    <p class="popover-item" @click="onPushToMy">我的博客</p>
                                    <p class="popover-item" @click="onLogout">注销登录</p>
                                </div>
                            </template>
                            <div class="user-info-wrapper"> <img :src="this.user.avatar" alt="">
                                <x-icon name="down" class="x-icon"></x-icon>
                            </div>
                        </x-popover>
                    </div>
                </div>
                <div class="top-left" v-if="!isLogin">
                    <span @click="onPushToLogin">登录</span><span @click="onPushToRegister">注册</span>
                </div>
            </x-col>
        </x-row>
    </div>
</template>
<script>
    import Icon from './icon';
    import Col from './col';
    import Row from './row';
    import Popover from './popover';
    import { mapState, mapActions } from 'vuex';
    export default {
        name: 'xHeader',
        components: { 'x-icon': Icon, 'x-col': Col, 'x-row': Row, 'x-popover': Popover },
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
                } else if (this.tipsTxt === 'register') { return `注册 LET'S SHARE`; } else if (this.tipsTxt === 'index') { return `加入 LET'S SHARE 分享前端咨询` }
            }
        },
        created() {},
        methods: {
            ...mapActions(['logout']),
            onPushToIndex() { this.$router.push({ path: '/' }) },
            onLogout() {
                this.logout();
                this.onPushToIndex();
            },
            onPushToMy() {
                this.$router.push({ path: `/my/${this.user.id}`, query: { redirect: this.user.id } });
            },
            onPushToLogin() {
                this.$router.push({ path: '/login' });
            },
            onPushToRegister() {
                this.$router.push({ path: '/register' });
            },
        },
        mounted() {
            this.$nextTick(() => {

            })

        },
    }
</script>
<style lang="scss" scoped>
    @import '../assets/base.scss';
    .header {
        font-family: $font;
        background: $bcolor3;
        color: #fff;
        padding: 30px 0 10px 0;
        position: relative;
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
                    cursor: pointer;
                }
                >.logoinfo {
                    font-size: 16px;
                    margin-left: 5px;
                    padding-left: 5px;
                    border-left: 2px solid #ddd;
                }
            }
            .user-bar {
                display: flex;
                justify-content: center;
                align-items: center;
                .user-info-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
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
            padding: 60px 0 20px;
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
                    >.logotitle {
                        font-size: 25px;
                        align-self: center;
                        margin: 20px auto;
                    }
                    >.logoinfo {
                        font-size: 18px;
                        align-self: flex-end;
                    }
                }
            }
        }
        .top-left {
            color: #fff;
            position: absolute;
            top: 0;
            right: 0;
            padding: 10px 16px 0 0;
            >span {
                padding: 4px 16px;
                border: 1px solid #fff;
                margin-right: 8px;
                border-radius: 4px;
                cursor: pointer;
                &:hover {
                    background: rgba(0, 0, 0, 0.05);
                    color: #ddd;
                    border-color: #ddd;
                }
            }
        }
    }
    .popover-item {
        cursor: pointer;
        &:hover {
            color: $bcolor3;
        }
    }
</style>