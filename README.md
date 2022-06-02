# Vuepress auto-menu

![npm](https://img.shields.io/npm/v/vuepress-automenu)
![npm](https://img.shields.io/npm/dt/vuepress-automenu)
[![GitHub issues](https://img.shields.io/github/issues/Alphaegen/vuepress-automenu)](https://github.com/Alphaegen/vuepress-automenu/issues)
[![GitHub stars](https://img.shields.io/github/stars/Alphaegen/vuepress-automenu)](https://github.com/Alphaegen/vuepress-automenu/stargazers)
[![GitHub license](https://img.shields.io/github/license/Alphaegen/vuepress-automenu)](https://github.com/Alphaegen/vuepress-automenu/blob/main/LICENSE)

A package which gives you the option to automatically generate the sidebar menu structure based on your filestructure.

## Installation:

**NPM:**
```bash
npm i vuepress-automenu
```

**Yarn:**
```bash
yarn i vuepress-automenu
```

## Usage:
You use the `getMenuItems(location = 'docs')` function to get all the menu items based on `location` which has `{projectfolder}/docs` as default.

```ts
const { getMenuItems } = require("vuepress-automenu");

export default defineUserConfig({
    theme: defaultTheme({
        sidebar: getMenuItems(),
    }),
})
```

## Collaboration:
If you want to report bugs, propose features or view what I'm working on you can use the Github link below.

https://github.com/Alphaegen/vuepress-automenu
