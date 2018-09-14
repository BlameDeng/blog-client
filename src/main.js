// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Layout from './components/layout';
import Header from './components/header';
import Sider from './components/sider';
import Content from './components/content';
import Footer from './components/footer';
import Row from './components/row';
import Col from './components/col';
import Icon from './components/icon';
import Button from './components/button';
import Input from './components/input';


Vue.component('x-layout', Layout);
Vue.component('x-header', Header);
Vue.component('x-sider', Sider);
Vue.component('x-content', Content);
Vue.component('x-footer', Footer);
Vue.component('x-row', Row);
Vue.component('x-col', Col);
Vue.component('x-icon', Icon);
Vue.component('x-button', Button);
Vue.component('x-input', Input);

Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
import store from './store/index';
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})