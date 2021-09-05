import Vue from 'vue';
import App from './App.vue';

import ElementUI from 'element-ui';
import { ElementTiptapPlugin } from 'element-tiptap';
import 'element-tiptap/lib/index.css';

Vue.use(ElementUI);
Vue.use(ElementTiptapPlugin, {
  // lang: "zh",
  // spellcheck: false,
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
