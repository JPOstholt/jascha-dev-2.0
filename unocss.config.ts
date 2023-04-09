import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [],
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
