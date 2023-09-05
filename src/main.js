import './public-path';
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router';

let instance = null;

function render(props = {}) {
  const { container } = props;
  instance = createApp(App);
  instance.use(ElementPlus);
  instance.use(router);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

export async function bootstrap() {
  console.log('%c%s', 'color: green;', 'vue3.0 app bootstraped');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function mount(props) {
  console.log('mount vue')
  render(props);
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
  router.options.history.destroy();
}

