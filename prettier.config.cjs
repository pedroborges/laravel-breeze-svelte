module.exports = {
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 120,
    semi: false,
    tabWidth: 4,
    plugins: ['prettier-plugin-svelte', 'prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
    overrides: [
        {
            files: '*.svelte',
            options: {
                parser: 'svelte',
            },
        },
    ],
}
