export default {
    '*.{ts,tsx}': [() => 'yarn run ts-check', 'yarn run lint'],
    '*.{js,jsx}': ['yarn run lint'],
    '*': ['yarn run format'],
};
