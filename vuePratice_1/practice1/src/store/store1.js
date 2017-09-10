import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
let store1 = new Vuex.Store({
    state: {
        stateRootArr: [5, 5, 5, 5, 5, 5]
    },
    modules: {
        moduleA: {
            namespaced: true,
            state: {
                moduleAArr: [1, 2, 3]
            },
            getters: {
                oddA: (state, evenA, rootState, rootGetters) => {
                    console.log(rootState, rootGetters)
                    return state.moduleAArr.concat(rootState.moduleB.moduleAArr)
                },
                evenA: state => state.moduleAArr.filter(v => v % 2 !== 0)
            },
            mutations: {
                ADDA: (state, payload) => {
                    state.moduleAArr.push(payload);
                }
            },
            actions: {
                ADDAMODULE: ({ state, commit, rootState, getters, rootGetters }) => {

                    commit('ADDB', rootState.stateRootArr[0], { root: true })
                    commit('ADDA', rootState.stateRootArr[0])
                }
            }
        },
        moduleB: {
            state: {
                moduleAArr: [4, 5, 6]
            },
            getters: {
                oddB: state => state.moduleAArr.filter(v => v % 2 == 0),
                evenB: state => state.moduleAArr.filter(v => v % 2 !== 0)
            },
            mutations: {
                ADDB: (state, payload) => {
                    state.moduleAArr.push(payload);
                }
            },
            actions: {}

        },
        moduleC: {
            state: {
                moduleAArr: [7, 8, 9]
            },
            getters: {
                oddC: state => state.moduleAArr.filter(v => v % 2 == 0),
                evenC: state => state.moduleAArr.filter(v => v % 2 !== 0)
            },
            mutations: {
                ADDC: (state, payload) => {
                    state.moduleAArr.push(payload);
                }
            },
            actions: {}

        }
    }

})
export default store1;