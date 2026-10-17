import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function crystalizedCssAlias() {
  return {
    name: 'crystalized-css-alias',
    enforce: 'pre',
    resolveId(source, importer) {
      if (!importer || !source.endsWith('CrystalizedBall.css')) return null
      if (!importer.includes('Crystalized_Ball.jsx')) return null
      return path.resolve(path.dirname(importer.split('?')[0]), 'Crystalized_Ball.css')
    },
  }
}

export default defineConfig({
  base: '/personal_page0/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  plugins: [crystalizedCssAlias(), react(), tailwindcss()],
})
