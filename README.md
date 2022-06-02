# Vuepress auto-menu

![npm](https://img.shields.io/npm/v/vuepress-automenu)
![npm](https://img.shields.io/npm/dt/vuepress-automenu)

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
You use the `getMenuItems(location = 'docs')` function to get all the menu items based on `location` which has `./docs` as default.

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
