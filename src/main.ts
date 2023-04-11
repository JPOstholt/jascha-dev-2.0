import { ViteSSG } from 'vite-ssg/single-page'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import i18n from './modules/i18n'

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(i18n)
})
