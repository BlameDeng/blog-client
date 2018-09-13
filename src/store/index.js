import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth'
import blog from './modules/blog'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { auth, blog },
    state: { count: 0, number: 100, arrary: ['a', 'b', 'c', 'd'] },
    getters: {
        both: (state) => {
            return state.count + state.number;
        },
        bothtwo: (state, getters) => { return getters.both * 2 },
        getByIndex: (state) => {
            return (index) => { return state.arrary[index]; }
        }
    },
    mutations: {
        increment(state, n) {
            state.count += n;
        },
        unshift(state, str) {
            state.arrary.unshift(str);
        },
        push(state, obj) {
            state.arrary.push(obj.string);
        }
    }
})