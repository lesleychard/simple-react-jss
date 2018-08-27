module.exports = {
    env: {
        browser: true,
    },
    extends: [
        'airbnb',
    ],
    plugins: [
        'babel',
    ],
    parser: 'babel-eslint',
    rules: {
        indent: [
            'error',
            4,
            {SwitchCase: 1},
        ],
        'object-curly-newline': 'off',
        'object-curly-spacing': 'off',
        'react/forbid-prop-types': 'off',
        'react/jsx-indent': [
            'error',
            4,
        ],
        'react/jsx-indent-props': [
            'error',
            4,
        ],
        'react/jsx-filename-extension': 'off',
    },
};
