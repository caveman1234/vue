<template>
  <div class="CompContainer">
    <div>
      <SelectExt
        v-model="busiData.selectExt"
        url="/web/api/getCombo"
        :field1.sync='busiData.name'
        :field2.sync='busiData.code'
        :field3.sync='busiData.value'
        :relative='{field1:"name",field2:"code",field3:"value"}'
        nameField="label"
        valueField="value"
        @change="selectExtChange"
        defaultValue="value1"
        :disabled="false"
        :dataSource="options"
        :multiple="false"
      />
    </div>
    <div>
      <RadioExt
        v-model="busiData.radioValue"
        :dataSource="[{label:'选项一',value:'1'},{label:'选项二',value:'2'}]"
        @change="selectExtChange"
      ></RadioExt>
    </div>

  </div>
</template>
<script>
import SelectExt from "./commonComps/SelectExt.vue";
import RadioExt from "./commonComps/RadioExt.vue";
var options = [
  {label:"label1",value:"value1",code:"code1",name:"name1"},
  {label:"label2",value:"value2",code:"code2",name:"name2"},
  {label:"label3",value:"value3",code:"code3",name:"name3"},
  {label:"label4",value:"value4",code:"code4",name:"name4"},
];
export default {
  name:"CompContainer",
  components:{SelectExt,RadioExt},
  data(){
    return{
      busiData:{
        selectExt:"value2",
        name:"",
        code:"",
        value:"",
        radioValue:"2"
      },
      options:options
    }
  },
  methods:{
    selectExtChange(value,selectedObj){
      console.log("selectExtChange",value,JSON.stringify(selectedObj))
    }
  },
  watch:{},
  mounted(){

    window.CompContainer = this;
  }
}
</script>
<style lang="scss" scoped>

</style>

