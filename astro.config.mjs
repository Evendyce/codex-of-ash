import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [mdx(), react()],
  base: '/codex-of-ash-and-echoes',
  vite: { ssr: { external: ['pagefind'] } },
});
