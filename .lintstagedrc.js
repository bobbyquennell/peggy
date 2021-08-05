module.exports = {
  'src/*.{js?(x),ts?(x)}': () => 'npm run lint:fix',
  'src/*.ts?(x)': () => 'npm run ts-check',
  // '*.{scss,css,md,html}': () => 'prettier --write',
};
