import Vue from 'vue';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    created() {
        console.log(this.$route.query)
    },
    mounted() {
        
    }
}