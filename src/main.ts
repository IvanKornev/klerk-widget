import { createApp } from 'vue';
import { vuetify } from '@/app/plugins';
import { RubricsPanel } from '@/widgets/rubrics';

import '@/app/assets/styles.css';

createApp(RubricsPanel)
  .use(vuetify)
  .mount('#app');
