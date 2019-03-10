<template>
  <el-select
    :disabled="disabled"
    :multiple='multiple'
    v-model="selectedValue"
    @change="selectExtChange"
    placeholder="请选择"
    size="mini"
    class="SelectExt">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
  </el-select>
</template>
<script>
var options = [
  {label:"label1",value:"value1",code:"code1",name:"name1"},
  {label:"label2",value:"value2",code:"code2",name:"name2"},
  {label:"label3",value:"value3",code:"code3",name:"name3"},
];
export default {
  name:"SelectExt",
  props:{
    value:{required:true,default:""},              //v-model绑定value
    nameField:{required:true},                     //请求数据的label字段
    valueField:{required:true},                    //请求数据的value字段
    url:{type:String,default:""},                  //请求地址
    params:{type:Object,default(){return {}}},     //请求参数
    field1:{type:[Boolean,String,Number]},         //带入字段1
    filed2:{type:[Boolean,String,Number]},         //带入字段2
    filed3:{type:[Boolean,String,Number]},         //带入字段3
    filed4:{type:[Boolean,String,Number]},         //带入字段4
    filed5:{type:[Boolean,String,Number]},         //带入字段5
    relative:{type:Object,default(){return {}}},   //定义带入字段对应的数据字段{field1:"name",field2:"code"},需配合field1,field2...使用
    multiple:{type:Boolean,default:false},         //是否多选
    defaultValue:{type:[String,Number],default:""},//默认值
    dataSource:{type:Array,default(){return []}},  //下拉选项
    disabled:{type:Boolean,default:false},         //是否可用
  },
  data(){
    return {
      selectedValue:"",
      selectedValue1:"",
      options:[]
    }
  },
  methods:{
    selectExtChange(value){
      var selectedObj = this.options.find(v => v.value === value);
      if(!this.multiple){
        if(!selectedObj) throw new Error("在options中::\n"+ JSON.stringify(this.options,null,2) +"\n无对应的value值::" + value);
      }
      this.$emit("input",value.toString());
      this.$emit("change",value.toString(),selectedObj);
      if(!this.multiple){
        this.emitRelativeFields(value);
      }
    },
    setSelectValue(value){
      this.selectedValue = value;
      this.selectExtChange(value);
    },
    //带出字段emit
    emitRelativeFields(value){
      var selectedObj = this.options.find(v => v.value === value);
      var relative = this.relative;
      Object.keys(relative).forEach((key,index) => {
        this.$emit(`update:${key}`,selectedObj[relative[key]]);
      });
    }
  },
  watch:{
    value(value){
      if(this.multiple){
        this.selectedValue = value.split(",").filter(Boolean);
      }else{
        this.selectedValue = value;
      }
    }
  },
  beforeMount(){
    if(this.dataSource.length === 0){
      console.log("ajax::",this.url);
      setTimeout(()=>{
        var nameField = this.nameField;
        var valueField = this.valueField;
        var relativeField = Object.values(this.relative);
        var fields = [nameField,valueField,...relativeField];
        fields = fields.filter((v,i) => fields.indexOf(v) === i).filter(Boolean);
        this.options = options.map(v => {
          return fields.reduce((acc,field) => {
            acc[field] = v[field];
            return acc;
          },{});
        });
        if(this.multiple){
          if(this.value){
            this.setSelectValue(this.value.split(",").filter(Boolean));
          }else{
            this.setSelectValue(this.defaultValue.split(",").filter(Boolean));
          }
        }else{
          if(this.value){
            this.setSelectValue(this.value);
          }else{
            this.setSelectValue(this.defaultValue);
          }
        }
      },200);
    }else{
      this.options = this.dataSource;
      if(this.multiple){
        if(this.value){
          this.setSelectValue(this.value.split(",").filter(Boolean));
        }else{
          this.setSelectValue(this.defaultValue.split(",").filter(Boolean));
        }
      }else{
        if(this.value){
          this.setSelectValue(this.value);
        }else{
          this.setSelectValue(this.defaultValue);
        }
      }
    }

  },
  mounted(){
    window.SelectExt = this;
  }
}
</script>
<style lang="scss" scoped>
.SelectExt{
  width: 100%;
  display: block;
}
</style>

