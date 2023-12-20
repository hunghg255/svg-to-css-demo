import { defineConfig } from 'csvgtocss';

export default defineConfig({
  src: 'public/svgicon', // svg path
  dist: 'public/svgcss', // output path
  prefix: 'icon', // font name
});
