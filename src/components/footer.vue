<template>
    <div class="footer" :style="xStyle">
        <x-row>
            <x-col span="20" offset="2" :pc="{span:16,offset:4}" :wpc="{span:12,offset:6}">
                <p>© xiedaimala.com 2018 wechat: xiedaimala01</p>
            </x-col>
        </x-row>
    </div>
</template>
<script>
    import Col from './col';
    import Row from './row';
    export default {
        name: 'xFooter',
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
    @import '../assets/base.scss';
    .footer {
        background: $bcolor5;
        color: $txtcolor2;
        font-size: 12px;
        padding: 16px 0;
        p {
            text-align: center;
        }
    }
</style>