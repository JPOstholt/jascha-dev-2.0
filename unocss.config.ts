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
    jo_border: 'border-b border-jo_dark',
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
