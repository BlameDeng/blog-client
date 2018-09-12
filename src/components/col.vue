<template>
    <div class="col" :class="colClasses" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'xCol',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            ipad: {
                type: Object,
                validator(value) {
                    let keys = Object.keys(value);
                    let valid = true;
                    keys.map((key) => {
                        if (!['span', 'offset'].includes(key)) {
                            valid = false;
                        }
                    });
                    return valid;
                }
            },
            npc: {
                type: Object,
                validator(value) {
                    let keys = Object.keys(value);
                    let valid = true;
                    keys.map((key) => {
                        if (!['span', 'offset'].includes(key)) {
                            valid = false;
                        }
                    });
                    return valid;
                }
            },
            pc: {
                type: Object,
                validator(value) {
                    let keys = Object.keys(value);
                    let valid = true;
                    keys.map((key) => {
                        if (!['span', 'offset'].includes(key)) {
                            valid = false;
                        }
                    });
                    return valid;
                }
            },
            wpc: {
                type: Object,
                validator(value) {
                    let keys = Object.keys(value);
                    let valid = true;
                    keys.map((key) => {
                        if (!['span', 'offset'].includes(key)) {
                            valid = false;
                        }
                    });
                    return valid;
                }
            }
        },
        data() {
            return {
                gutter: 0
            }
        },
        computed: {
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            },
            colClasses() {
                let { span, offset, ipad, npc, pc, wpc } = this;
                let ipadClasses = [];
                let npcClasses = [];
                let pcClasses = [];
                let wpcClasses = [];
                if (ipad) {
                    ipadClasses = [`col-ipad-${ipad.span}`, `offset-ipad-${ipad.offset}`];
                };
                if (npc) {
                    npcClasses = [`col-npc-${npc.span}`, `offset-npc-${npc.offset}`];
                };
                if (pc) {
                    pcClasses = [`col-pc-${pc.span}`, `offset-pc-${pc.offset}`];
                };
                if (wpc) {
                    wpcClasses = [`col-wpc-${wpc.span}`, `offset-wpc-${wpc.offset}`];
                };
                return [span && `col-${span}`, offset && `offset-${offset}`,
                    ...ipadClasses, ...npcClasses, ...pcClasses, ...wpcClasses
                ];
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col {
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24)*100%;
            }
        }
        $class-prefix:offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24)*100%;
            }
        }

        @media (min-width:577px) {
            $class-prefix: col-ipad-;

            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24)*100%;
                }
            }

            $class-prefix:offset-ipad-;

            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }

        @media (min-width:769px) {
            $class-prefix: col-npc-;

            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24)*100%;
                }
            }

            $class-prefix:offset-npc-;

            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }

        @media (min-width:993px) {
            $class-prefix: col-pc-;

            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24)*100%;
                }
            }

            $class-prefix:offset-pc-;

            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }

        @media (min-width:1201px) {
            $class-prefix: col-wpc-;

            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24)*100%;
                }
            }

            $class-prefix:offset-wpc-;

            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }
    }
</style>