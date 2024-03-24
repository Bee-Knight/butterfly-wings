# butterfly-wings
Frontend for butterfly!!

## Taro Introduce
https://docs.taro.zone/docs/GETTING-STARTED

## Run as H5
### yarn
$ yarn dev:h5
$ yarn build:h5

### npm script
$ npm run dev:h5
$ npm run build:h5

### taro
$ taro build --type h5 --watch
$ taro build --type h5

### npx
$ npx taro build --type h5 --watch
$ npx taro build --type h5

## Run Wechat
### yarn
$ yarn dev:weapp
$ yarn build:weapp

### npm script
$ npm run dev:weapp
$ npm run build:weapp

### taro
$ taro build --type weapp --watch
$ taro build --type weapp

### watch 同时开启压缩
$ set NODE_ENV=production && taro build --type weapp --watch # Windows
$ NODE_ENV=production taro build --type weapp --watch # Mac
