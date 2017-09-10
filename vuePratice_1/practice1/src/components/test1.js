import myInput from '@/components/myInput';
import  Vue from 'vue';
let radioArr = [
   {name: 'radio1', value: 1, disabled: false},
   {name: 'radio2', value: 2, disabled: false},
   {name: 'radio3', value: 3, disabled: false},
   {name: 'radio4', value: 4, disabled: false}
];
let selectArr = [
   {name: '选项1', value: 1, disabled: false},
   {name: '选项2', value: 2, disabled: true},
   {name: '选项3', value: 3, disabled: false},
   {name: '选项4', value: 4, disabled: true}
];
let selectArr1 = [
   {name: '选项1', value: 1, disabled: true},
   {name: '选项2', value: 2, disabled: true},
   {name: '选项3', value: 3, disabled: true},
   {name: '选项4', value: 4, disabled: true}
];
const ONE_DAY = 86400000;
let tableData2 = [{date: '2016-05-02', name: '王小虎1', address: '上海市普陀区金沙江路 1518 弄',}, {
   date: '2016-05-04',
   name: '王小虎2',
   address: '上海市普陀区金沙江路 1518 弄'
}, {date: '2016-05-01', name: '王小虎3', address: '上海市普陀区金沙江路 1518 弄',}, {
   date: '2016-05-03',
   name: '王小虎4',
   address: '上海市普陀区金沙江路 1518 弄'
}];
export default {
   components: {
      myInput,
      //异步加载组件,:is,this.$options.components动态设置组件
      //或者直接<async-webpack-example />调用
      // 'async-webpack-example':()=>import('./test4')
   },
   data () {
      return {
         radioArr,
         radio: 1,
         checkboxArr: [],
         checkAll: false,
         isIndeterminate: false,
         input: 0,
         inputNum: 0,
         selectArr,
         selectArr1,
         selected: '',
         elswitch: '',
         elslider: 10,
         elsliderRange: [20, 50],
         startTime: '',
         endTime: '',
         datePicker: '',
         pickerOptions: {
            disabledDate(time){
               return time.getTime() < Date.now() - ONE_DAY * 5 || time.getTime() > Date.now() + ONE_DAY * 5;
            },
            onPick(obj){
               debugger
            }
         },
         elrate: 3.5,
         rateTexts: ['111', '222', '333', '444', '555', '666', '777'],
         tableData2,
         multipleSelection: [],
         comp: null,
         onceMsg:1
      }
   },
   methods: {
      func(x){
         debugger;
         this.onceMsg++;
         this.comp = this.$options.components['async-webpack-example'];


      },
      radioChange(){

      },
      checkboxChange(){
         this.isIndeterminate = this.checkboxArr.length > 0 && this.checkboxArr.length < this.radioArr.length;
         this.checkAll = this.checkboxArr.length == this.radioArr.length;
      },
      chackAllChange(event){
         this.checkboxArr = event.target.checked ? this.radioArr.map(v => v.value) : [];
         this.isIndeterminate = false;
      },
      switchChange(){
         alert('switch-Changed');
      },
      formattooltip(){
         return this.elslider + '😁😁😁😁😁😁';
      },
      timeChange(obj){
      },
      tableRowClassName(row, index){
         if (index === 1) {
            return 'rowColor';
         }
      },
      handleClick(index, data){
         data.splice(index, 1);
      },
      tableChange(newRow, oldRow){
      },
      handleSelectionChange(v){
         this.multipleSelection = v;

      },
      formatter(row, col){
      },
      inpClick(x){
         alert('inpClick-' + x);
      },
      mouseEnter(rowObj,colObj,event,el){
         el.target.style.background = 'red';
      },
      mouseLeave(rowObj,colObj,event,el){
         el.target.style.background = 'white';

      }
   },
   computed: {
      allSelectDisabled(){
         return this.selectArr1.map(v => v.disabled).every(v => v);
      }
   },
   watch: {
      radioArr(n, o){
         debugger
      }
   },
   mounted(){
      // debugger
      window.test1 = this;

   },
   beforeMount(){
      // debugger
      // Vue.component('async-webpack-example', function (resolve) {
      //    // 这个特殊的 require 语法告诉 webpack
      //    // 自动将编译后的代码分割成不同的块，
      //    // 这些块将通过 Ajax 请求自动下载。
      //    require(['./test4'], resolve)
      //
      //    // require.ensure(['./test4'], function (require) {
      //    //    require(['./test4'], resolve);
      //    // }, 'test4')
      // })
   },
   created(){
      // debugger

   },
   beforeCreate(){
      // debugger
   },
   update(){
      // debugger
   }
}
