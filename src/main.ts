import { ViteSSG } from 'vite-ssg/single-page'

import { ScrollTrigger, SplitText, gsap } from 'gsap/all'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import i18n from './modules/i18n'

// gsap
gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(i18n)
})
