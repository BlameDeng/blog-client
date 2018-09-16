<template>
    <div class="wrapper" :style="xStyle" :class="{error:error}">
        <input :style="xStyle" :value="value" :disabled="disabled" :readOnly="readOnly" @change="$emit('change',$event)" @input="$emit('input',$event.target.value)" @focus="$emit('focus',$event)" @blur="$emit('blur',$event)" :placeholder="placeholder" ref="myXInput">
        <template v-if="error">
            <x-icon name="error"></x-icon><span>{{error}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from './icon';
    export default {
        name: 'xInput',
        props: {
            value: { type: String },
            disabled: { type: Boolean, default: false },
            readOnly: { type: Boolean, default: false },
            autoFocus: { type: Boolean, default: false },
            xWidth: { type: String },
            xHeight: { type: String },
            error: { type: String },
            placeholder: { type: String }
        },
        components: { 'x-icon': Icon },
        computed: {
            xStyle() {
                let { xWidth, xHeight, xResize } = this;
                return { width: xWidth, height: xHeight };
            }
        },
        mounted() {
            if (this.autoFocus) { this.$refs.myXInput.focus(); }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../assets/base.scss';
    $height:32px;
    $font-size:14px;
    $background:#fff;
    $background-active:#eee;
    $border-radius:4px;
    $color:#333;
    $border-color-hover:#666;
    $border-color:#999;
    $box-show-color:rgba(0, 0, 0, 0.2);
    .wrapper {
        display: inline-block;
        font-family:$font;
        font-size: $font-size;
        color: $color;
        >input {
            height: $height;
            width: 100%;
            padding: 0 0.5em;
            border: 1px solid $bcolor5;
            border-radius: $border-radius;
            background: none;
            &:hover {
                border-color: $bcolor3;
            }
            &:focus {
                outline: none;
                border-color: $bcolor2;
                box-shadow: inset 0 0 3px $box-show-color;
            }
            &[disabled], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }
        >.x-icon {
            width: 1em;
            height: 1em;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
        }
        &.error {
            display: inline-flex;
            align-items: center;
            >.x-icon {
                fill: rgb(200, 50, 50);
            }
            >input {
                border-color: rgb(200, 50, 50);
            }
            >span {
                color: rgb(200, 50, 50);
            }
        }
    }
</style>