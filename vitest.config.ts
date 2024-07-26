import path from 'path';
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: path.join(__dirname, './vitest.setup.ts'),
      include: ['**/?(*.)spec.ts?(x)'],
    },
  }),
);
