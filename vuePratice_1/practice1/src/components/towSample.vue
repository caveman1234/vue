<template>
    <div>
        <div>tow</div>
        <slot :todos="todos"></slot>
        <ul>
            <li v-for="item in todos" :key="item.name">
                <span>{{item.name}}</span>
                <span>{{item.age}}</span>
                <span style="color:red;">
                    <slot :item="item"></slot>
                </span>
            </li>
            
        </ul>
        <div>bus----{{obj.msg}}</div>
    </div>
</template>
<script>
import {bus1} from './bus';
export default {
    data() {
        return {
            obj:bus1.obj,
            todos: [{ name: 'jack1', age: 22 }, { name: 'jack2', age: 23 }, { name: 'jack3', age: 24 }]
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
