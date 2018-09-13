<template>
    <div class="layout-content" :style="xStyle">
        <x-row>
            <x-col span="20" offset="2" :pc="{span:16,offset:4}" :wpc="{span:12,offset:6}">
                <slot></slot>
            </x-col>
        </x-row>
    </div>
</template>
<script>
    import Col from './col';
    import Row from './row';
    export default {
        name: 'xContent',
        components: { 'x-col': Col, 'x-row': Row },
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
    .layout-content {
        flex-grow: 1;
    }
</style>