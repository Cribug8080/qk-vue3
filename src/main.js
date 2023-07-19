import './public-path';
import { createApp } from 'vue'
import App from './App.vue'

let instance = null;

function render(props = {}) {
  const { container } = props;
  instance = createApp(App);
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
}

