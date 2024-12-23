import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import './style.css'

const app = createApp(App);
const pinia = createPinia();

app
  .use(pinia)
  .use(router)
  .use(vuetify)

 app.mount('#app');
