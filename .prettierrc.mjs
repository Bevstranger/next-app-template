/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'es5',
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '.*styles.css$',
    '',
    'dayjs',
    '^react$',
    '^next$',
    '^next/.*$',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '^@mantine/(.*)$',
    '^@mantinex/(.*)$',
    '^@mantine-tests/(.*)$',
    '^@docs/(.*)$',
    '^@/.*$',
    '^../(?!.*.css$).*$',
    '^./(?!.*.css$).*$',
    '\\.css$',
  ],
  overrides: [
    {
      files: '*.mdx',
      options: {
        printWidth: 70,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: {
        // Здесь можно добавить специфические настройки для TypeScript файлов
        parser: 'typescript',

      },
    },
    {
      files: ['*.js', '*.jsx'],
      options: {
        // Здесь можно добавить специфические настройки для JavaScript файлов
        parser: 'babel-ts',
      },
    },
  ],
};

export default config;