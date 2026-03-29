import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

export default defineConfig({
  base: '/OmegarubyKO_docs/',
  plugins: [react(), tailwindcss()],
});
