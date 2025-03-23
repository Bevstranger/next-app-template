import mantine from 'eslint-config-mantine';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...mantine,
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}'] },
  {
    files: ['**/*.story.tsx'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react/jsx-curly-brace-presence': 'off',

      'jsx-a11y/alt-text': 'off',
    },
  }
);
