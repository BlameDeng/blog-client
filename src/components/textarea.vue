<template>
    <div class="wrapper" :style="xStyle">
        <textarea :value="value" @change="$emit('change',$event)" @input="$emit('input',$event.target.value)" @focus="$emit('focus',$event)" @blur="$emit('blur',$event)" :style="xStyle">
        </textarea>
    </div>
</template>
<script>
    export default {
        name: 'xTextarea',
        props: {
            value: { type: String },
            xWidth: { type: String },
            xHeight: { type: String },
            xResize: { type: Boolean, default: false },
        },
        computed: {
            xStyle() {
                let { xWidth, xHeight, xResize } = this;
                if (xResize) {
                    return { width: xWidth, height: xHeight, resize: 'auto' };
                } else {
                    return { width: xWidth, height: xHeight, resize: 'none' };
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../assets/base.scss';
    .wrapper {
        font-family: $font;
        display: inline-block;
        >textarea {
            font-family: $font;
            resize: none;
            padding: 1em 0.5em;
            border: 1px solid $bcolor5;
            border-radius: 4px;
            color: #333;
            &:hover {
                border-color: $bcolor3;
            }
            &:focus {
                outline: none;
                box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.25);
            }
        }
    }
</style>