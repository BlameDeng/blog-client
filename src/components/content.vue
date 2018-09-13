<template>
    <div class="layout-content" :style="xStyle">
        <x-row class="content-inner">
            <x-col class="content-inner" span="20" offset="2" :pc="{span:16,offset:4}" :wpc="{span:12,offset:6}">
                <slot></slot>
            </x-col>
            <x-col span="2" offset="0" :pc="{span:4,offset:0}" :wpc="{span:6,offset:0}">
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
        display: flex;
        flex-direction: column;
        .content-inner {
            flex-grow: 1;
        }
    }
</style>