<template>
    <button class="x-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <x-icon v-if="loading" name="loading" :color="iconColor" class="icon loading"></x-icon>
        <x-icon v-if="iconName&&!loading" :name="iconName" :color="iconColor" class="icon"></x-icon>
        <div class="slot-content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon';
    import Vue from "vue";
    export default {
        name: 'xButton',
        components: { 'x-icon': Icon },
        props: {
            iconName: { type: String },
            iconColor: { type: String, default: 'currentColor' },
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return value === 'right' || value === "left";
                }
            },
        }
    }
</script>
<style lang="scss" scoped>
    $button-height:32px;
    $font-size:14px;
    $button-background:#fff;
    $button-background-active:#eee;
    $border-radius:4px;
    $color:#333;
    $border-color:#666;
    $border-color-hover:#999;
    .x-button {
        @keyframes spin {
            0% {
                transform: rotateZ(0);
            }

            100% {
                transform: rotateZ(360deg);
            }
        }
        cursor: pointer;
        font-size: $font-size;
        padding: .5em 1.5em;
        color: $color;
        border-radius: $border-radius;
        background:$button-background;
        border: 1px solid $border-color;
        display:inline-flex;
        justify-content:center;
        align-items:center;
        vertical-align:top;
        &.active {
            background: $button-background-active;
        }
        &:hover {
            border: 1px solid $border-color-hover;
        }
        &:focus {
            outline: none;
        }
        &.icon-left {
            >.icon {
                order: 1;
                margin-right: 0.1em;
            }

            >.slot-content {
                order: 2
            }
        }
        &.icon-right {
            >.icon {
                order: 2;
                margin-left: 0.1em;
            }
            >.slot-content {
                order: 1
            }
        }
        .loading {
            animation: spin 2s linear infinite;
        }
    }
</style>