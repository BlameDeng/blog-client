<template>
    <svg class="x-icon" aria-hidden="true" @click="$emit('click',$event)">
        <use v-bind:xlink:href="`#icon-${name}`"></use>
    </svg>
</template>
<script>
    import './svg';
    export default {
        name: 'xIcon',
        props: {
            name: {
                type: String,
            },
            color: {
                type: String,
                default: 'currentColor',
                validator(value) {
                    if (value) {
                        return typeof(value) === 'string';
                    } else { return true; }
                }
            }
        },
        mounted() {
            this.$el.style.fill = this.color;
        }
    }
</script>
<style lang="scss" scoped>
    .x-icon {
        width: 1em;
        height: 1em;
        vertical-align: top;
        overflow: hidden;
    }
</style>