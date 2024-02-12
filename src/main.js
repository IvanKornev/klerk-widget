import { createApp } from 'vue';
import { vuetify, api } from '@/app/plugins';
import { RubricsPanel } from '@/widgets/rubrics';

import '@/app/assets/styles.css';

createApp(RubricsPanel)
  .use(vuetify)
  .use(api)
  .mount('#app');
