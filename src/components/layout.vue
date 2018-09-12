<template>
    <div class="layout" :class="xClass" :style="xStyle">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'xLayout',
        props: {
            xHeight: { type: String, default: '' },
            xWidth: { type: String, default: '' },
            xBg: { type: String, default: '' }
        },
        data() {
            return {
                hasSider: false
            }
        },
        computed: {
            xStyle() {
                let { xHeight, xWidth, xBg } = this;
                return { width: xWidth, height: xHeight, backgroundColor: xBg }
            },
            xClass() {
                return {
                    ['has-sider']: this.hasSider }
            }
        },
        mounted() {
            this.$children.forEach(vm => {
                if (vm.$options.name === 'xSider') {
                    this.hasSider = true;
                }
            });
        },
    }
</script>
<style lang="scss" scoped>
    .layout {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        &.has-sider {
            flex-direction: row;
        }
    }
</style>