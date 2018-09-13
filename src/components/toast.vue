<template>
    <div class="toast-wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <x-icon :name="type" class="x-icon"></x-icon>
            <div class="info-txt">
                {{info}}
            </div>
        </div>
    </div>
</template>
<script>
    import Icon from './icon';
    export default {
        name: 'xToast',
        components: { 'x-icon': Icon },
        props: {
            autoClose: { type: [Boolean, Number], default: 2 },
            closeButton: {
                type: [Object, Boolean],
                default: () => { return { text: '关闭', callback: undefined } }
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
            },
            type: {
                type: String,
                default: 'tips',
                validator(value) {
                    return ['tips', 'success', 'warning', 'error'].indexOf(value) >= 0;
                }
            },
            info: {
                type: String
            }
        },
        computed: {
            toastClasses() {
                return {
                    [`toast-position-${this.position}`]: true,
                    [`icon-type-${this.type}`]: true
                }
            }
        },
        mounted() {
            this.updateStyle();
            this.execClose();
        },
        methods: {
            close() {
                this.$emit('beforeClose');
                this.$el.remove();
                this.$destroy();
            },
            updateStyle() {
                if (this.closeButton) {
                    this.$nextTick(() => {
                        this.$refs.line.style.height =
                            `${this.$refs.toast.getBoundingClientRect().height}px`;
                    });
                }
            },
            execClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close();
                    }, this.autoClose * 1000);
                };
            },
            clickClose() {
                this.close();
                if (this.closeButton && typeof(this.closeButton.callback) === 'function') {
                    this.closeButton.callback();
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../assets/base.scss';
    $font-size:14px;
    $toast-min-height:40px;
    $toast-bg:rgba(0, 0, 0, 0.75);
    $animation-duration:0.5s;
    @keyframes slide-up {
        from {
            opacity: 0;
            transform: translateY(100%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes slide-down {
        from {
            opacity: 0;
            transform: translateY(calc(-100% - 50px));
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .toast-wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        &.toast-position-top {
            top: 50px;
            >.toast {
                // border-top-left-radius: 0;
                // border-top-right-radius: 0;
                animation: slide-down $animation-duration linear;
            }
        }
        &.toast-position-middle {
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            >.toast {
                animation: fade-in $animation-duration linear;
            }
        }
        &.toast-position-bottom {
            bottom: 0;
            >.toast {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-up $animation-duration linear;
            }
        }
        &.icon-type-warning {
            >.toast {
                color: #E6A03C;
                background: rgb(253, 246, 236);
            }
        }
        &.icon-type-error {
            >.toast {
                color: #F56C6C;
                background: rgb(254, 240, 240);
            }
        }
        &.icon-type-success {
            >.toast {
                color: #64C832;
                background: rgb(240, 250, 235);
            }
        }
        &.icon-type-tips {
            >.toast {
                color: #919196;
                background: rgb(237, 242, 252);
            }
        }
        >.toast {
            font-family:$font;
            font-size: $font-size;
            min-height: $toast-min-height;
            line-height: 1.8;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
            border-radius: 4px;
            // box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
            padding: 0 16px;
            >.slot-wrapper {
                // display: flex;
                // justify-content: center;
                // align-items: center;
                vertical-align: middle;
            }
            >.line {
                border-left: 1px solid #666;
                margin-left: 16px;
            }
            >.x-icon {
                margin-right: .5em;
            }
        }
    }
</style>