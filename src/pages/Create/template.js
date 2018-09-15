import Textarea from '../../components/textarea';
import Input from '../../components/input';
import Button from '../../components/button';
import Toast from '../../components/toast';
import Vue from 'vue';
import { mapActions } from 'vuex';
export default {
    name: 'CreatePage',
    components: {
        'x-textarea': Textarea,
        'x-input': Input,
        'x-button': Button
    },
    data() {
        return {
            atIndex: false,
            title: '',
            description: '',
            content: '',
            ToastConstructor: Vue.extend(Toast)
        }
    },
    methods: {
        ...mapActions(['createBlog']),
        onCreateBlog() {
            this.createBlog({ title: this.title, description: this.description, content: this.content, atIndex: this.atIndex }).then(
                res => {
                    this.showToast('success', res.msg);
                    let blogId = res.data.id;
                    this.$router.push({ path: `/detail/${blogId}`});
                }
            ).catch(() => {});
        },
        showToast(type, msg) {
            let div = document.createElement('div');
            document.body.appendChild(div);
            let toast = new this.ToastConstructor({
                propsData: { autoClose: 5, type: type, info: msg, closeButton: false }
            }).$mount(div);
        },
        toggleAtIndex() { this.atIndex = !this.atIndex; }
    }
}