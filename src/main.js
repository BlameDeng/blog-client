import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import App from './App';
import router from './router';
import friendlyDate from './helpers/friendlyDate';
import toast from './helpers/toast';

Vue.use(friendlyDate);
Vue.use(toast);

import Layout from './components/layout';
import Header from './components/header';
import Sider from './components/sider';
import Content from './components/content';
import Footer from './components/footer';
import Row from './components/row';
import Col from './components/col';


Vue.component('x-layout', Layout);
Vue.component('x-header', Header);
Vue.component('x-sider', Sider);
Vue.component('x-content', Content);
Vue.component('x-footer', Footer);
Vue.component('x-row', Row);
Vue.component('x-col', Col);

Vue.config.productionTip = false

import store from './store/index';
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})