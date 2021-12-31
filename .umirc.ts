import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'all',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  // fastRefresh: {},
  targets: {
    ie: 9,
  },
});
