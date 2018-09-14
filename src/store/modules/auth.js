import auth from '../../api/auth';

const state = {
    user: null,
    isLogin: false
}

const getters = {}

const mutations = {
    setUser(state, playload) {
        state.user = playload.user;
    },

    setLogin(state, playload) {
        state.isLogin = playload.isLogin;
    }
}

const actions = {
    login({ commit }, { username, password }) {
        return auth.login({ username, password }).then((res) => {
            commit('setUser', { user: res.data });
            commit('setLogin', { isLogin: true });
            return res;
        })
    },

    async register({ commit }, { username, password }) {
        let res = await auth.register({ username, password });
        commit('setUser', { user: res.data });
        commit('setLogin', { isLogin: true });
        return res.data;
    },

    async logout({ commit }) {
        await auth.logout();
        commit({ type: 'setUser', user: null });
        commit({ type: 'setLogin', isLogin: false });
    },

    async checkLogin({ commit, state }) {
        if (state.isLogin) {
            return true;
        }
        let res = await auth.getInfo();
        commit('setLogin', { isLogin: res.login });
        if (!res.isLogin) {
            return false
        }
        commit('setUser', { user: res.data });
        return true;
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}