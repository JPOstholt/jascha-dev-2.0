import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  shortcuts: {
    jo_border: 'border-b border-jo_dark/30 lg:border-b-2 pb-2 xl:pb-4',
    jo_text_sm: 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl',
    jo_text_base: 'text-base lg:text-xl xl:text-2xl',
    jo_text_h1: 'leading-[9vw] text-[8.5vw] tracking-wide 2xl:text-[9rem] 2xl:leading-[9.2rem]',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    breakpoints: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1800px',
      '4xl': '2400px',
    },
    colors: {
      jo_dark: '#403D39',
      jo_beige: '#E1DDD6',
    },
    fontFamily: {
      display: ['CMGeom', 'sans-serif'],
      serif: ['Italiana', 'serif'],
    },
  },
})
