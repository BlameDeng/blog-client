<<template>
    <div class="x-group">
        <slot></slot>
    </div>
    </template>
    <script>
        export default {
            name: 'xGroup',
            mounted() {
                for (let node of this.$el.children) {
                    let name = node.tagName.toLowerCase();
                    if (name !== 'button') {
                        console.log(`x-group的子元素应该全是x-button，否则会影响样式，但你的是${name}`);
                    }
                }
            }
        }
    </script>
    <style lang="scss" scoped>
        .x-group {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            vertical-align: middle;
            >.x-button {
                &:first-child {
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }
                &:not(:first-child):not(:last-child) {
                    border-radius: 0;
                    border-left: none;
                    border-right: none;
                }
                &:last-child {
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }
            }
        }
    </style>