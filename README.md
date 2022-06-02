# Vuepress auto-menu

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
