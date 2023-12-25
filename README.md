# Setup convert svg to css icon


## Install pkg

```sh
npm install csvgtocss -D
```

## Add script to package.json

```json
"scripts": {
  "genicon": "csvgtocss"
},
```

- Create file `svgtocss.config.{js|ts}`

```ts
import { defineConfig } from 'csvgtocss';

export default defineConfig({
  src: 'public/svgicon', // svg path
  dist: 'public/svgcss', // output path
  prefix: 'icon', // font name,
  exportJson: true, // export json file
});
```

- Run script

```sh
npm run genicon
```

## Preview Icon

 - Install [iconify-preview](https://marketplace.visualstudio.com/items?itemName=hunghg255.iconify-preview)
 - Config `.vscode/settings.json` read file json icon which generate after run script

```json
{
  "iconify.color": "#ddd",
  "iconify.customCollectionJsonPaths": ["./public/svgcss/icon-collection.json"], // path json file
  "iconify.delimiters": ["-"],
  "iconify.prefixes": ["", "icon"],
  "iconify.inplace": false,
  "iconify.annotations": true,
  "iconify.languageIds": ["typescript", "typescriptreact"]
}
```
