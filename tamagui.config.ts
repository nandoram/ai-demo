import { shorthands } from '@tamagui/shorthands'
import { tokens } from '@tamagui/themes'
import { createFont, createTamagui } from 'tamagui'
import mergedThemes from './themes'

const themes = mergedThemes;

export default createTamagui({
  themes,
  tokens,
  shorthands,
  media: {
    xs: { maxWidth: 660 },
    gtXs: { minWidth: 660 + 1 },
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    md: { maxWidth: 980 },
    gtMd: { minWidth: 980 + 1 },
    lg: { maxWidth: 1120 },
    gtLg: { minWidth: 1120 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
  fonts: {
    body: createFont({
      family: 'Arial',
      size: {
        // You'll want to fill these values in so you can use them
        // for now, fontSize="$4" will be 14px.
        // You can define different keys, but `tamagui`
        // standardizes on 1-15.
        4: 14,
      },
      lineHeight: {
        4: 16,
      },
    }),
  },
})