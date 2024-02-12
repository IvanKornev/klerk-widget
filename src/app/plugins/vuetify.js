import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default {
  install: () => {
    const vuetify = createVuetify({
      components,
      directives,
    });
    return vuetify;
  }
};
