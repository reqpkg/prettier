export default {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  printWidth: 100,
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^~/(.*)$', '^[./]', '^[/]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
}
