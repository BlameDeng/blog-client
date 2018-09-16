import Toast from '../components/toast';

export default {
    install(Vue, options) {
        Vue.prototype.$showToast = function showToast(type, msg) {
            const ToastConstructor = Vue.extend(Toast);
            let div = document.createElement('div');
            document.body.appendChild(div);
            let toast = new ToastConstructor({
                propsData: { autoClose: 3, type: type, info: msg, closeButton: false }
            });
            toast.$mount(div);
        }
    }
}