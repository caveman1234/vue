<template>
    <div id="app">
        <div class="left">
            <el-menu :router=true>
                <el-submenu v-for="item in nav" :index="item.path" :key="item.path">
                    <template slot="title">
                        <i class="el-icon-message"></i>
                        <span slot="title">{{item.title}}</span>
                    </template>
                    <template v-if="item.children">
                        <template v-for="sub in item.children">
                            <el-menu-item :index="sub.path" :key="sub.title">{{sub.title}}</el-menu-item>
                        </template>
                    </template>
                </el-submenu>
            </el-menu>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    let nav = [{
        path: '1',
        title: "导航一",
        children: [
            {
                path: '/Test1',
                title: '导航1-1'
            },
            {
                path: '/Test2',
                title: '导航1-2'
            },
            {
                path: '/Test3',
                title: '导航1-3'
            },
            {
                path: '/Test4',
                title: '导航1-4'
            },
            {
                path: '/Test5',
                title: '导航1-5'
            },
            {
                path: '/Test6',
                title: '导航1-6'
            }
        ]
    }];
    export default {
        data() {
            return {
                nav
            }
        },
        methods: {}
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    #app {
        display: flex;
        min-height: 100vh;
    }

    .left {
        flex: 0 0 200px;
        border: 1px solid rgba(0, 0, 0, 0.1)
    }

    .right {
        flex: 1;
    }
</style>
