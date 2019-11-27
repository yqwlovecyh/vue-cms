import Vue from "vue"

// 导入App根组件
import app from './App.vue'

// 按需导入mint-ui的组件 mint-ui按需导入需要注册
import {Header } from "mint-ui"
// 将组建祖册的Vue中
Vue.component(Header.name,Header)

// 导入mui的样式tabbar的样式nav>a
import './lib/mui/css/mui.css'

var vm=new Vue({
  el:"#app",
  render:c=>c(app)
})