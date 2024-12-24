import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import './style.css';
import piniaPersist from 'pinia-plugin-persistedstate';

const app = createApp(App);
const pinia = createPinia();

pinia
.use(piniaPersist);

app
  .use(pinia)
  .use(router)
  .use(vuetify)

 app.mount('#app');
