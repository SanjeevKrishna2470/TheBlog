// @ts-check

import { defineConfig } from 'astro/config';

export default defineConfig({
   site: " https://SanjeevKrishna2470.github.io/TheBlog",
  base: '/TheBlog',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  }
});