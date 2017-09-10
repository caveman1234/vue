var vm = new Vue({
	el:'#app',
	data(){
		return{
			msg:'msg----'
		}
	},
	methods:{
		func(){
			vm1.msg+='-app00-'
		}
	}
});
var vm1 = new Vue({
	el:'#app1',
	data(){
		return{
			msg:'app1----'
		}
	},
	methods:{
		func(){
			vm.msg+='-app1-';
		}
	}
});