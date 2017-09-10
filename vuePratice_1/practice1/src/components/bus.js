import Vue from 'vue';
export let bus1 = new Vue({
    data() {
        return {
            obj: {
                msg: 1
            }

        }
    }
});
bus1.$on('add', function(num = 1) {
    debugger
    this.obj.msg += num;
})