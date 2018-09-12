<template>
    <div class="sider" :style="xStyle">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'xSider',
        props: {
            xHeight: { type: String, default: '' },
            xWidth: { type: String, default: '' },
            xBg: { type: String, default: '' }
        },
        computed: {
            xStyle() {
                let { xHeight, xWidth, xBg } = this;
                return { width: xWidth, height: xHeight, backgroundColor: xBg }
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>