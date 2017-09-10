<template>
    <div>
        <button @click="func1">add====bus</button>
        <div>{{obj.msg}}</div>
        <tow>
            <template scope="props">
                <button @click="func(props.item)">编辑</button>
            </template>
        </tow>

    </div>
</template>

<script>
import Vue from 'vue';
import tow from './towSample';
import {bus1} from './bus';
export default {
    components: { tow },
    data() {
        return {
            obj:bus1.obj
        }
    },
    methods: {
        func(item){
            item.age ++;
        },
        func1(){
            bus1.$emit('add',10);
        }
    },
    mounted(){
        window.xxx = this;
    }
}

</script>

<style scoped>

</style>
