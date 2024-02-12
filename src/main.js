import { createApp } from 'vue';
import { vuetify, api } from '@/app/plugins';
import { RubricsPanel } from '@/widgets/rubrics';

createApp(RubricsPanel)
  .use(vuetify)
  .use(api)
  .mount('#app');
