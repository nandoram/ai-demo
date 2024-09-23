const tokens = require('./figmaTokens.json')
// make the token color the token value
const { themes } = require('@tamagui/themes')
const fs = require('fs')

for (const key in tokens.light_fire.default) {
  tokens.light_fire.default[key] = tokens.light_fire.default[key].value
}

for (const key in tokens.dark_fire.default) {
  tokens.dark_fire.default[key] = tokens.dark_fire.default[key].value
}

const light_fire = tokens.light_fire.default
const dark_fire = tokens.dark_fire.default

const theme = {
  light: { ...themes.light, ...light_fire },
  dark: { ...themes.dark, ...dark_fire },
}
const mergedThemes = { ...themes, ...theme }

fs.writeFileSync('./design-tokens/theme.json', JSON.stringify(mergedThemes))
