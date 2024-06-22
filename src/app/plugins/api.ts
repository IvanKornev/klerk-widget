import type { App } from 'vue';
import { rubrics } from '@/app/api';

export default {
  install: (app: App) => {
    app.config.globalProperties.$api = {
      rubrics,
    };
  }
};
