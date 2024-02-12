import { createApp } from 'vue';
import { vuetify, api } from '@/app/plugins';
import { RubricTree } from '@/widgets/rubric-tree';

createApp(RubricTree)
  .use(vuetify)
  .use(api)
  .mount('#app');
