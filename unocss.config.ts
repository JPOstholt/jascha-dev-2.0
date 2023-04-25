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
    jo_text_base: 'text-base lg:text-xl xl:text-2xl',
    jo_text_sm: 'text-sm lg:text-base xl:text-lg',
    jo_text_lg: 'text-base lg:text-2xl xl:text-3xl font-medium',
    jo_text_h1: 'font-display leading-[9vw] text-stroke-1 pb-8 text-[8.5vw] tracking-wide',
    jo_text_h2: 'text-lg font-display lg:text-2xl xl:text-3xl',
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
      jo_green: '#82887C',
      jo_dark: '#403D39',
      jo_beige: '#E1DDD6',
      jo_brown: '#884125',
      jo_grey: '#C1BDB9',
    },
    fontFamily: {
      display: ['CMGeom', 'sans-serif'],
    },
  },
})
