import blog from '../../api/blog';


const state = {}

const getters = {}

const mutations = {}

const actions = {
    async getIndexBlogs({ commit }, page = 1) {
        let res = await blog.getIndexBlogs({ page });
        return res;
    },
    async getDetail({ commit }, blogId) {
        let res = await blog.getDetail({ blogId });
        return res;
    }
}

// getIndexBlogs({ page = 1 } = { page: 1 }) {
//     return this.getBlogs({ page, atIndex: true });
// },

// getDetail({ blogId }) {
//     return request(URL.GET_DETAIL.replace(':blogId', blogId));
// },


export default {
    state,
    getters,
    mutations,
    actions
}