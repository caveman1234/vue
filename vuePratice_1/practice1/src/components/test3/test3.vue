<template>
   <div>
      <el-button @click="func" size="small" type="primary">test1 click me</el-button>
      <el-row>
         <el-col :span="12" class="border1px">
            <el-row>
               <el-checkbox @change="chackAllChange" :indeterminate="isIndeterminate" v-model="checkAll"></el-checkbox>
               <el-checkbox-group size="small" v-model="checkboxArr" @change="checkboxChange">
                  <el-checkbox v-for="item in radioArr" :label="item.value" :disabled="item.disabled" :key="item.value">{{item.name}}</el-checkbox>
               </el-checkbox-group>
               <div>{{checkboxArr}}</div>
            </el-row>
            <el-row>
               <el-radio-group v-model="radio" @change="radioChange">
                  <el-radio v-for="item in radioArr" :label="item.value" :disabled="item.disabled" :key="item.value">{{item.name}}</el-radio>
               </el-radio-group>
               <div>{{radio}}</div>
            </el-row>
            <el-row>
               <el-input v-model="input" placeholder="请输入..."></el-input>
               <div>{{input}}</div>
               <el-input v-model="input" :disabled="!!input" size="small"></el-input>
            </el-row>
            <el-row>
               <el-input-number v-model="inputNum" size="small" :step="3" :min="-10" :max="10"></el-input-number>
               <el-input-number v-model="inputNum" size="small" :step="3" :min="-10" :max="10" :controls="false" :disabled="true"></el-input-number>
               <el-input-number v-model="inputNum" size="small" :step="3" :min="-10" :max="10" :controls="false"></el-input-number>
               <el-input-number v-model="inputNum" size="small" :step="3" :min="-10" :max="10" :controls="false" :debounce="3000"></el-input-number>
            </el-row>


         </el-col>
         <el-col :span="12" class="border1px">
            :span="12"

         </el-col>


      </el-row>


   </div>
</template>


<script>
   import test3 from '@/components/test3/test3'
   export default test3;
</script>
<style lang="scss" scoped>
   @import "./test3.scss";
</style>
