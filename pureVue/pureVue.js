var vm = new Vue({
	// el:'#app',
	data(){
		return{
			msg:'msg----999'
		}
	},
	methods:{
		func(){
			vm1.msg+='-app00-'
		}
	}
});
vm.$on("ev",function(a){
	this.msg += "1"
});
var vm1 = new Vue({
	el:'#app1',
	data(){
		return{
			msg:vm.msg
		}
	},
	methods:{
		func(){
			vm.msg+='-app1-';
		}
	}
});







var a = Vue.extend({
	name:"dddddd",
	template:'<p>ddddddd</p>',
	data(){
		return {
			a:1
		}
	}
})
var b = new a();
var res = Vue.compile('<div><span>{{ msg }}</span></div>')

new Vue({
  data: {
    msg: 'hello'
  },
  render: res.render,
  staticRenderFns: res.staticRenderFns
})