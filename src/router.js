import Home from './components/Home.vue';
import ListContent from './components/ListContent.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/main-list', component: ListContent },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/vue' : '/'),
  routes, // `routes: routes` 的缩写
})

export default router;