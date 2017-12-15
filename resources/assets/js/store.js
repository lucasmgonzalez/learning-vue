import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: []
    },

    mutations: {
        addUser: function({ users }, user) {
            users.push(user);
        },

        setUsers: function(state, newUsers) {
            state.users = newUsers;
        }
    },

    actions: {
        retrieveUsers: function({ commit }) {
            window.axios.get('/api/users').then(response => {
                commit('setUsers', response.data);
            });
        }
    }
});
