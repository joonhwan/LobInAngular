# 프로젝트 생성시 했던 거 정리

- npm install -g jspm tsd typescript

- npm install jspm --save-dev

- jspm init
  (note: select typescript for transpiler)
  --> created config.js, jspm_packages, node_modules, package.json)
- jspm install jquery

- tsc --init
  (created tsconfig.json)
- tsd install -ros jquery
  (-ros is just for convenetion? --resolve --overwrite --save)
  


insert following json element to `config.js`
```
  typescriptOptions: {
    "tsconfig": true // indicates that a tsconfig exists that should be used
  },
```

edit tsconfig.json like followings.
```
{
    "compilerOptions": {
        "target": "es6",
        "module": "system",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false,
        "outDir": "dist/"
    },
    "files" : [
         "src/app" 
    ]
}
```


-