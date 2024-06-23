import { defineConfig } from '@vue/cli-service';

export default defineConfig({
  devServer: {
    allowedHosts: 'all',
  },
  transpileDependencies: true
});
