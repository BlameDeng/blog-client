import Toast from '../../components/toast';
import Vue from "vue";
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: '用户名不能为空',
            ToastConstructor: Vue.extend(Toast),
            currentForm:true
        }
    },
    methods: {
        onClick() {
            let toast = new this.ToastConstructor({
                propsData: {
                    autoClose: 3,
                    closeButton:false,
                    type:'error',
                    info:'必须输入汉字'
                }
            });
            toast.$slots.default = [this.msg];
            let div = document.createElement('div');
            document.body.appendChild(div);
            toast.$mount(div);
        }
    }
}