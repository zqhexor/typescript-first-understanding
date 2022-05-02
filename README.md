## 全局安装
```
npm install -g typescript
```

## 查看ts版本
```
tsc -v
```

## 初始化工程
```
npm init -y
```

## 初始化生成tsconfig.json文件
```
tsc --init
```
tsconfig.json中
```
"outDir": "./dist",   /* 编译输出文件夹 */                      
"rootDir": "./src/ts", /* 编译文件来源 */ 
```
Symbol类型需要把`target`的标准库改为`ES2015`，或者把`lib`改为`["ES2015","dom"]`

## 开启保存自动编译
```
tsc -w
```
