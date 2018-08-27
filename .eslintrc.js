module.exports = {
    env: {
        browser: true,
    },
    extends: [
        'airbnb',
    ],
    rules: {
        indent: [
            'error',
            4,
            {SwitchCase: 1},
        ],
        'object-curly-newline': 'off',
        'object-curly-spacing': 'off',
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
