import { createApp } from 'vue';
import { RubricTree } from './widgets/rubric-tree';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(RubricTree).use(vuetify).mount('#app');
