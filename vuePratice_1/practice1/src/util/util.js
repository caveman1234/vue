export default {
   install(Vue, options){
      Vue.prototype.hahaha = 'hahaha';
      Vue.globalMethod = function () {
         alert('global');
      }

   }
}
