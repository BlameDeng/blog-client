<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]:true}">
            <slot name="content" :close="close"></slot>
        </div>
        <span ref="triggerWraper">
            <slot></slot>
        </span>
    </div>
</template>
<script>
    export default {
        name: 'xPopover',
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'right', 'left', 'bottom'].indexOf(value) >= 0;
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value) {
                    return ['click', 'hover'].indexOf(value) >= 0;
                }
            }
        },
        data() {
            return { visible: false }
        },
        computed: {
            openEvent() {
                if (this.trigger === 'click') {
                    return 'click';
                } else {
                    return 'mouseenter';
                }
            },
            closeEvent() {
                if (this.trigger === 'click') {
                    return 'click';
                } else {
                    return 'mouseleave';
                }
            }
        },
        created() {},
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper);
                let { top, left, height, width } = this.$refs.triggerWraper.getBoundingClientRect();
                if (this.position === 'top') {
                    this.$refs.contentWrapper.style.top = `${top+window.scrollY}px`;
                    this.$refs.contentWrapper.style.left = `${left+window.scrollX}px`;
                } else if (this.position === 'bottom') {
                    this.$refs.contentWrapper.style.top = `${top+height+window.scrollY}px`;
                    this.$refs.contentWrapper.style.left = `${left+window.scrollX}px`;
                } else if (this.position === 'left') {
                    this.$refs.contentWrapper.style.top = `${top+height/2+window.scrollY}px`;
                    this.$refs.contentWrapper.style.left = `${left+window.scrollX}px`;
                } else if (this.position === 'right') {
                    this.$refs.contentWrapper.style.top = `${top+height/2+window.scrollY}px`;
                    this.$refs.contentWrapper.style.left = `${left+width+window.scrollX}px`;
                }
            },
            onClickDocument(e) {
                if (this.$refs.popover === e.target || this.$refs.popover.contains(e.target)) {
                    return
                } else if (
                    this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
                ) { return }
                this.close();
            },
            open() {
                this.visible = true;
                this.$nextTick(() => {
                    this.positionContent();
                    document.addEventListener('click', this.onClickDocument);
                })
            },
            onClick(event) {
                if (this.$refs.triggerWraper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close();
                    } else { this.open(); }
                }
            },
            close() {
                this.visible = false;
                document.removeEventListener('click', this.onClickDocument);
            }
        },
        mounted() {
            if (this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.onClick);
            } else {
                this.$refs.popover.addEventListener('mouseenter', this.open);
                this.$refs.popover.addEventListener('mouseleave', this.close);
            }
        },
        beforeDestroy() {
            if (this.$refs.popover) {
                if (this.trigger === 'click') {
                    this.$refs.popover.removeEventListener('click', this.onClick);
                } else {
                    this.$refs.popover.removeEventListener('mouseenter', this.open);
                    this.$refs.popover.removeEventListener('mouseleave', this.close);
                }
            }
        },
    }
</script>
<style lang="scss" scoped>
    @import '../assets/base.scss';
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
        >span {
            display: inline-block;
        }
    }
    .content-wrapper {
        border: 1px solid #fff;
        border-radius: 4px;
        // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        background: #fff;
        padding: .5em 1em;

        max-width: 20em;
        word-break: break-all;
        position: absolute;
        &::before, &::after {
            content: '';
            display: block;
            height: 0;
            width: 0;
            border: 10px solid transparent;
            position: absolute;
        }
        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;
            &::before {
                top: 100%;
                border-bottom: none;
                border-top-color: #fff;
                left: 10px;
            }
            &::after {
                top: calc(100% - 1px);
                border-bottom: none;
                border-top-color: #fff;
                left: 10px;
            }
        }
        &.position-bottom {
            margin-top: 10px;
            &::before {
                bottom: 100%;
                border-top: none;
                border-bottom-color: #fff;
                left: 10px;
            }
            &::after {
                bottom: calc(100% - 1px);
                border-top: none;
                border-bottom-color: #fff;
                left: 10px;
            }
        }
        &.position-left {
            transform: translateX(-100%) translateY(-50%);
            margin-left: -10px;
            &::before {
                left: 100%;
                top: 50%;
                transform: translateY(-50%);
                border-right: none;
                border-left-color: #fff;
            }
            &::after {
                left: calc(100% - 1px);
                top: 50%;
                transform: translateY(-50%);
                border-right: none;
                border-left-color: #fff;
            }
        }
        &.position-right {
            margin-left: 10px;
            transform: translateY(-50%);
            &::before {
                right: 100%;
                top: 50%;
                transform: translateY(-50%);
                border-left: none;
                border-right-color: #fff;
            }
            &::after {
                right: calc(100% - 1px);
                top: 50%;
                transform: translateY(-50%);
                border-left: none;
                border-right-color: #fff;
            }
        }
    }
</style>