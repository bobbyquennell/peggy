// this declaration below is to enable ESModule syntax for css module files:
// example: import styles from './index.module.css'

// Easy fix is to create global definition (eg. file called typings.d.ts in your source root) for importing CSS Modules:
// inspired by: https://stackoverflow.com/a/44228423/4390115
// copied from the file: react-app-env.d.ts from CRA after eject:
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// for more about using CSS modules with typescript:
// https://fettblog.eu/typescript-react/styles/
// https://stackoverflow.com/questions/41336858/how-to-import-css-modules-with-typescript-react-and-webpack
// https://medium.com/@sapegin/css-modules-with-typescript-and-webpack-6b221ebe5f10
// https://medium.com/@tommybernaciak/css-modules-for-react-and-typescript-2dd8f0fd7cdd
// https://ringcentral.github.io/integration-blog/blog/2019/04/03/blog-import-the-style-to-the-typescript-file.html
// https://stackoverflow.com/a/41946697/4390115

// in order to support intellisense for class names, consider to use below css module loaders:
// webpack loaders :
// https://github.com/TeamSupercell/typings-for-css-modules-loader#readme
// https://github.com/Jimdo/typings-for-css-modules-loader
// https://github.com/seek-oss/css-modules-typescript-loader

// a better solution to support the intellisense for class names, without generating *.d.ts files into your repo.
// using typescript plugin: https://github.com/mrmckeb/typescript-plugin-css-modules
// inspired by : https://ringcentral.github.io/integration-blog/blog/2019/04/03/blog-import-the-style-to-the-typescript-file.html

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
