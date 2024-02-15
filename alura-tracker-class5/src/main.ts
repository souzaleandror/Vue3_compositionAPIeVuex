import { createApp } from 'vue'
import App from './App.vue'
import { key, store } from './store';

import 'fontawesome-free/css/all.min.css';
import roteador from './roteador';

createApp(App)
  .use(roteador)
  .use(store, key)
  .mount('#app')
