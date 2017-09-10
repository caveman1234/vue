let state = {
    arr: [4, 5, 6]
};
let getters = {
    odd: state => state.arr.filter(v => v % 2 == 0),
    even: state => state.arr.filter(v => v % 2 !== 0)
};
let mutations = {
    addTow(state, payload) {
        state.arr.push(payload);
    }
};
let actions = {
    addTowA({ commit }) {
        commit('addTow', 99)
    }
};
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}