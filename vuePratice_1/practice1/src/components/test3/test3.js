import myInput from '@/components/myInput';
let radioArr = [
   {name: 'radio1', value: 1, disabled: false},
   {name: 'radio2', value: 2, disabled: false},
   {name: 'radio3', value: 3, disabled: false},
   {name: 'radio4', value: 4, disabled: false}
];
export default {
   components: {
      myInput
   },
   data () {
      return {
         radioArr,
         radio: 1,
         checkboxArr: [],
         checkAll: false,
         isIndeterminate: false,
         input:0,
         inputNum:0
      }
   },
   methods: {
      func(){
         this.radioArr[0].disabled = false;
         debugger;
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
      }
   },
   computed: {},
   watch: {
      radioArr(n, o){
         debugger
      }
   }
}
