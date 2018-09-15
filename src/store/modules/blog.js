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
    },
    async createBlog({ commit }, { title, description, content, atIndex = false }) {
        let res = await blog.createBlog({ title, description, content, atIndex });
        return res;
    },
    async getBlogsByUserId({ commit }, { userId, page = 1, atIndex }) {
        let res = await blog.getBlogsByUserId(userId, { page, atIndex });
        return res;
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}