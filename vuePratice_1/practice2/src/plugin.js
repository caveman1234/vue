export default {
    install(Vue) {
        Vue.prototype.xxxxxxx = '999999999999999';
        Vue.mixin({
            mounted() {
                console.log('mixin-mounted');
            }
        })
        Vue.directive('aa', {
            inserted(el) {
                el.innerHTML = 'directive-el'
            }
        })
    }
}