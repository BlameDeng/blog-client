import blog from '../../api/blog';


const state = {}

const getters = {}

const mutations = {}

const actions = {
    async getIndexBlogs({ commit }, page = 1) {
        let res = await blog.getIndexBlogs({ page });
        return res;
    }
}

// getIndexBlogs({ page = 1 } = { page: 1 }) {
//     return this.getBlogs({ page, atIndex: true });
// },


export default {
    state,
    getters,
    mutations,
    actions
}