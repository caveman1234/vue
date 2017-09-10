import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
const ADD = "ADD";
const ADDA = "ADDA";
const WILL_REQUEST = "WILL_REQUEST";
const END = "END";
export let store = new Vuex.Store({
    state: {
        arr: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    getters: {
        odd: state => state.arr.filter(v => v % 2 == 0),
        even: state => state.arr.filter(v => v % 2 != 0)
    },
    mutations: {
        [ADD]: (state, id) => {
            state.arr.push(id);
        },
        [WILL_REQUEST]: (state, payload) => {
            console.log('WILL_REQUEST');
        },
        [END]: (state, payload) => {
            console.log('END');
        }
    },
    actions: {
        [ADDA]: ({ commit, state }, id) => {
            commit("WILL_REQUEST");
            setTimeout(() => {
                commit("ADD", id);
                commit("END");
            }, 0);
        }
    }
});