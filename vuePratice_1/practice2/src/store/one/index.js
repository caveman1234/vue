let state = {
    arr: [1, 2, 3]
};
let getters = {
    odd: (state, getters, rootState, rootGttters) => {
        console.log(state.arr, getters.even, rootState.oneModule.arr, rootGttters["oneModule/even"]);
        return state.arr.filter(v => v % 2 == 0)
    },
    even: state => state.arr.filter(v => v % 2 !== 0)
};
let mutations = {
    ADD(state, payload) {
        state.arr.push(payload)
    }
};
let actions = {
    ADDA(context) {
        let { state, commit, dispatch, getters, rootGetters, rootState } = context;
        commit('ADD', 14)
    }
};
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}