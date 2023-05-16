import { ViteSSG } from 'vite-ssg/single-page'

import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import i18n from './modules/i18n'

export const createApp = ViteSSG(App, ({ app, isClient }) => {
  app.use(i18n)

  if (isClient) {
    gsap.registerPlugin(SplitText)
    gsap.registerPlugin(ScrollTrigger)
  }
})
