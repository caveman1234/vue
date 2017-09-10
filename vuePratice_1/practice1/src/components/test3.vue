<template>
   <div>
      <el-button @click="func" size="small" type="primary">test1 click me</el-button>
      <el-row>
         <el-col :span="12" class="border1px">
            <el-row>
               <el-checkbox @change="chackAllChange" :indeterminate="isIndeterminate"
                  v-model="checkAll"></el-checkbox>
               <el-checkbox-group size="small" v-model="checkboxArr" @change="checkboxChange">
                  <el-checkbox v-for="item in radioArr" :label="item.value" :disabled="item.disabled"
                     :key="item.value">{{item.name}}
                  </el-checkbox>
               </el-checkbox-group>
               <div>{{checkboxArr}}</div>
            </el-row>
            <el-row>
               <el-radio-group v-model="radio" @change="radioChange">
                  <el-radio v-for="item in radioArr" :label="item.value" :disabled="item.disabled" :key="item.value">
                     {{item.name}}
                  </el-radio>
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
            <el-row>
               <el-select v-model="selected" placeholder="请选择">
                  <el-option v-for="item in selectArr" :key="item.value" :label="item.name" :value="item.value" :disabled="item.disabled"></el-option>
               </el-select>
               <el-select v-model="selected" placeholder="请选择" :disabled="allSelectDisabled">
                  <el-option v-for="item in selectArr1" :key="item.value" :label="item.name" :value="item.value" :disabled="item.disabled"></el-option>
               </el-select>
            </el-row>
            <el-row>
               <el-switch v-model="elswitch" on-color="red" off-color="blue" on-text="开" off-text="关"></el-switch>
               <el-tooltip placement="top" :content="`选中了${elswitch}`">
                  <el-switch :on-value="100" :off-value="-100" v-model="elswitch" on-color="red" off-color="blue" on-text="开" off-text="关"></el-switch>
               </el-tooltip>
               <el-tooltip placement="top" :content="`选中了${elswitch}`">
                  <el-switch disabled :on-value="100" :off-value="-100" v-model="elswitch" on-color="red" off-color="blue" on-text="开" off-text="关"></el-switch>
               </el-tooltip>
               <el-tooltip placement="top" :content="`选中了${elswitch}`">
                  <el-switch @change="switchChange" :width="100" :disabled="false" :on-value="100" :off-value="-100" v-model="elswitch" on-color="red" off-color="blue" on-text="开" off-text="关"></el-switch>
               </el-tooltip>
            </el-row>
            <el-row>
               <el-slider :format-tooltip="formattooltip" v-model="elslider"></el-slider>
               <el-slider :step="10" :format-tooltip="formattooltip" v-model="elslider"></el-slider>
               <el-slider show-stops :step="10" :format-tooltip="formattooltip" v-model="elslider"></el-slider>
               <el-slider :max="100" range show-stops :step="10" v-model="elsliderRange"></el-slider>
            </el-row>
            <el-row>
               <el-time-select size="small" :editable="false" v-model="startTime" :picker-options="{start:'08:00',step:'00:10',end:'09:00'}" placeholder="选择开始时间..."></el-time-select>
               <el-time-select readonly size="small" :editable="false" v-model="startTime" :picker-options="{start:'08:00',step:'00:10',end:'09:00'}" placeholder="选择开始时间..."></el-time-select>
            </el-row>
            <el-row>
               <el-date-picker format="yyyy/MM/dd" @change="timeChange" size="small" :picker-options="pickerOptions" type="date" placeholder="请选择日期" v-model="datePicker"></el-date-picker>
            </el-row>
            <el-row>
               <el-date-picker type="datetime" :editable="false" v-model="datePicker"></el-date-picker>
            </el-row>
            <el-row>
               <el-rate :texts="rateTexts" :max="7" v-model="elrate" show-text></el-rate>
               <el-rate :texts="rateTexts" :max="10" disabled show-text text-template="{value}" v-model="elrate" show-text></el-rate>
            </el-row>
            <el-row>
               <el-table highlight-current-row @current-change="tableChange" :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
                  <el-table-column type="index" label="序号" width="100"></el-table-column>
                  <el-table-column prop="date" label="日期" width="180"></el-table-column>
                  <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                  <el-table-column prop="address" label="地址">
                     <template scope="scope">
                        <el-button @click="handleClick(scope.$index,tableData2)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                     </template>
                  </el-table-column>
               </el-table>
            </el-row>

            <myInput>
               <h4 slot="one">one</h4>
               <h4 slot="tow">two</h4>
               <template scope="props">
                  <div>{{props.text}}</div>
               </template>
            </myInput>


         </el-col>
         <el-col :span="12" class="border1px">
            <el-row>
               <el-table @cell-mouse-enter="mouseEnter" @cell-mouse-leave="mouseLeave" :default-sort="{prop: 'date', order: 'descending'}" @selection-change="handleSelectionChange" highlight-current-row @current-change="tableChange" :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
                  <el-table-column type="selection"></el-table-column>
                  <el-table-column type="index" label="序号" width="100"></el-table-column>
                  <el-table-column prop="date" label="日期" width="180"></el-table-column>
                  <el-table-column :formatter="formatter" prop="name" label="姓名" width="180"></el-table-column>
                  <el-table-column prop="address" label="地址">
                     <template scope="scope">
                        <el-button @click="handleClick(scope.$index,tableData2)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                     </template>
                  </el-table-column>
               </el-table>
            </el-row>

            <el-row>
               <myInput @inpClick="inpClick" :inpData="selectArr">
                  <template slot="one" scope="scope">
                     <div>slot  --one</div>
                     <h3>hello from parent</h3>
                     <h3>{{ scope.text }}</h3>
                  </template>
                  <template slot="two" scope="scope">
                     <div @click="func(scope.$name)">name--{{scope.$name}}</div>
                     <div>index--{{scope.index}}</div>
                  </template>
               </myInput>
               <div>async-webpack-example</div>

               <component :is="comp"></component>
               <!--<async-webpack-example></async-webpack-example>-->


            </el-row>
            <el-row>
               <div>v-once</div>
               <div v-once>{{onceMsg}}</div>
            </el-row>


         </el-col>


      </el-row>


   </div>
</template>


<script>
   import test1 from './test1'
   export default test1;
</script>
<style lang="scss" scoped>
   @import "./test1.scss";
</style>
