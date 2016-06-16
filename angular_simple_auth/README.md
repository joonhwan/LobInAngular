# Steps to generate project 

## Init package manager

- `npm init`

    generate package.json

- `npm install jspm --save-dev`

    generate node_modules with systemjs or something..

- `jspm init`

    generate config.js / jspm_package.
    as a javascript newbie, **do not transpiler** for a while.
        - firefox |new| operator issue sometimes...
        - chrome `this` undefined issue sometimes....

## Typescript init

- `tsd init`

    typescript definition file handling...

- `tsc --init`

    edit the generated tsconfig.json like ... 
    (though exclude options is meanlingless here. 
    'cause we are not in the root project folder)
    ```
    {
        "compilerOptions": {
            "module": "system",
            "target": "es5",
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

    **no `--save` or `--save-dev` option** is needed here. 

    - `jspm install angular angular-route angular-cookies angular-mocks bootstrap font-awesome lodash`
    
- tsd type definitions

    `--save` option is needed to generate merged ./typings/tsd.d.ts file.

    - `tsd install angular angular-route angular-cookies bootstrap lodash --save`


##  Prepare source dir structure 

- `mkdir app`
- `mkdir app\src`
- `mkdir app\dist`
