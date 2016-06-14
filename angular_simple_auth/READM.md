# Steps to generate project 

## Init package manager

- `npm init`

    genearte package.json

- `npm install jspm --save-dev`

    generate node_modules with systemjs or something..

- `jspm init`

    generate config.js / jspm_package 

- `tsd init`

    typescript definition file handling...

##  Prepare source dir structure 

- `mkdir app`
- `mkdir app\src`
- `mkdir app\dist`


## Typescript init

- `tsc --init app\src`

    edit the generated tsconfig.json like ... 
    (though exclude options is meanlingless here. 
    'cause we are not in the root project folder)
    ```
    {
        "compilerOptions": {
            "module": "commonjs",
            "target": "es6",
            "noImplicitAny": true,
            "sourceMap": true,
            "outDir": "../dist"
        },
        "exclude": [
            "node_modules"
        ]
    }
    ```

# Steps to bootstrapping 3rdparty 

- jspm packages

    no `--save` or `--save-dev` option is needed here. 

    - `jspm install angular`
    - `jspm install angular-route`
    - `jspm install angular-cookies`
    - `jspm install bootstrap`
    - `jspm install font-awesome`

- tsd type definitions

    `--save` option is needed to generate merged ./typings/tsd.d.ts file.

    - tsd install angular --save
    - tsd install angular-route --save 
    - tsd install angular-cookies --save
    - tsd install bootstrap --save


