#TypeScript Sandbox

https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI

Left off here on Lesson 12- Classes:
https://www.youtube.com/watch?v=OsFwOzr3_sE&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=12


## Commands:
`redburd@ubuntu ~/Desktop/dev/3 $ sudo npm install -g typescript`

`redburd@ubuntu ~/Desktop/dev/3/typescript-sandbox $ tsc`
Now that the `tscongif.json` file has been modified, this will compile all `.ts` files in the `./src` directory into `.js` files in the `./public` directory.

Since typescript has been installed, we can compile the .ts file into the .js file.
This way the browser can use it.
`redburd@ubuntu ~/Desktop/dev/3/typescript-sandbox/src $ tsc sandbox.ts sandbox.js`

Because the .ts and .js file have the same name, we can shortenit:
`redburd@ubuntu ~/Desktop/dev/3/typescript-sandbox/src $ tsc sandbox.ts`

This tells node to watch the .ts file and update the .js file each time the .ts file changes:
`redburd@ubuntu ~/Desktop/dev/3/typescript-sandbox/src $ tsc sandbox.ts -w`

This will initialize a configuration file called `tsconfig.json`:
`redburd@ubuntu ~/Desktop/dev/3/typescript-sandbox $ tsc --init`
Next, follow these options:

1. inside `tsconfig.json` un-comment `"rootDir": "./"` and change it to read: `"rootDir": "./src",`

2. inside `tsconfig.json` un-comment  `"outDir": "./"` and change it to read: `"outDir": "./public",`

3. move `index.html` and `style.css` into `./public`

4. add the following to `tsconfig.json` in order to make sure only .ts files in the `./src` directory are compiled into a .js file: `"include": ["src"] /* only compile .ts files that are in the './src' file`


Repo:
https://github.com/iamshaunjp/typescript-tutorial/tree/lesson-2
