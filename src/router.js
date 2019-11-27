// 1.导入路由模块
import VueRouter from 'vue-router'

//2. 导入对应的路由组件

// 3. 创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

//4. 把路由对象暴露出去
export default router