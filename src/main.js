import { createApp } from 'vue';
import { vuetify, api } from '@/app/plugins';
import MainPage from '@/pages/index';

createApp(MainPage)
  .use(vuetify)
  .use(api)
  .mount('#app');
