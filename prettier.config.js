module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'twMerge', 'cn', 'tv'],
  tailwindConfig: './tailwind.config.ts',
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 80,
}