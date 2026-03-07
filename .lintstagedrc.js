export default {
    '*.{ts,tsx}': [() => 'yarn run ts-check', 'yarn run lint:fix'],
    '*.{js,jsx}': ['yarn run lint:fix'],
    '*': ['yarn run format'],
};
