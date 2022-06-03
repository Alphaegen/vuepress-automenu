# Vuepress auto-menu

![npm](https://img.shields.io/npm/v/vuepress-automenu)
![npm](https://img.shields.io/npm/dt/vuepress-automenu)
[![GitHub issues](https://img.shields.io/github/issues/Alphaegen/vuepress-automenu)](https://github.com/Alphaegen/vuepress-automenu/issues)
[![GitHub stars](https://img.shields.io/github/stars/Alphaegen/vuepress-automenu)](https://github.com/Alphaegen/vuepress-automenu/stargazers)
[![GitHub license](https://img.shields.io/github/license/Alphaegen/vuepress-automenu)](https://github.com/Alphaegen/vuepress-automenu/blob/main/LICENSE)

A package which gives you the option to automatically generate the side and nav menu structure based on your filestructure. The sidebar will be based on folder names and file names and the nav menu will only use folder names.

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
You use the `getSidebarItems()` or `getNavbarItems()` functions, depending on which one you need to get all the menu items. It uses `{projectfolder}/docs` as default location but you can change it by adding your folder as parameter to either of the functions. (like this: `src`)

```ts
import { getSidebarItems, getNavbarItems } from 'vuepress-automenu';

export default defineUserConfig({
    theme: defaultTheme({
        navbar: getNavbarItems(),
        sidebar: getSidebarItems()
    }),
})
```

## Collaboration:
If you want to report bugs, propose features or view what I'm working on you can use the Github link below.

https://github.com/Alphaegen/vuepress-automenu
