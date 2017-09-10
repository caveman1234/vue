let state = {
    arr: [7, 8, 9]
};
let getters = {
    odd: state => state.arr.filter(v => v % 2 == 0),
    even: state => state.arr.filter(v => v % 2 !== 0)
};
let mutations = {};
let actions = {};
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}