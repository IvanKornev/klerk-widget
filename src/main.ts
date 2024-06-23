import { createApp } from 'vue';
import { vuetify } from '@/app/plugins';
import { RubricsPanel } from '@/widgets/rubrics';

import '@/app/assets/styles.css';

const app = createApp(RubricsPanel)
  .use(vuetify)
  .mount('#app');
