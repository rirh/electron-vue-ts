# electron-vue-ts

```
模版版本

 version：^2.6.11
 electron：^11.0.0

 环境要求

 node：>10.23.0
 npm：>6.x
```

 ### 国内修改源
```
win：

set ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"

liunx：

export ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"

yarn：

yarn config set electron_mirror https://npm.taobao.org/mirrors/electron/

npm ：

npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
```
 ### 生成logo

 1.把logo图片放在public文件夹下
 2.使用以下命令
```
yarn electron:generate-icons
```


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn electron:serve
```

### Compiles and minifies for production
```
yarn electron:build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
