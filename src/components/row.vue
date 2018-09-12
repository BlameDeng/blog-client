<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'xRow',
        props: {
            gutter: { type: [Number, String] },
            alignPosition: {
                type: String,
                validator(value) {
                    return ['left', 'center', 'right'].indexOf(value) >= 0;
                }
            }
        },
        computed: {
            rowStyle() {
                let { gutter } = this;
                return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }
            },
            rowClass() {
                let { alignPosition } = this;
                return [alignPosition && `align-${alignPosition}`];
            }
        },
        mounted() {
            this.$children.map((vm) => {
                vm.gutter = this.gutter;
            })
        },
    }
</script>
<style lang="scss" scoped>
    .row {
        display: flex;
        flex-wrap: wrap;

        &.align-left {
            justify-content: flex-start;
        }

        &.align-center {
            justify-content: center;
        }

        &.align-right {
            justify-content: flex-end;
        }
    }
</style>