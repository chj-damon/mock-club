module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
        "mocha": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "forOf": true,
            "jsx": true,
            "es6": true,
            "experimentalObjectRestSpread" : true
        }
    },
    "rules": {
        "comma-dangle": 0,
        "semi": [2, "never"],
        "indent": [1, 4],
        "react/prop-types": 0,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": 0,
        "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
        "react/prefer-stateless-function": 0,
        "react/forbid-prop-types": 0,
        "jsx-a11y/href-no-hash": 0,
        "jsx-a11y/label-has-for": 0,
        "linebreak-style": 0,
        "react/jsx-closing-bracket-location": 0,
        "object-curly-spacing": 0,
        "arrow-body-style": 0,
        "no-console": 0,
        "no-shadow": 0,
        "max-len": 0,
        "prefer-template": 0,
        "prefer-arrow-callback": 0,
        "import/no-unresolved": 0,
        "import/first": 0,
        "import/extensions": 0,
        "global-require": 0,
        "no-underscore-dangle": 0,
        "no-unused-expressions": 0,
        "no-unneeded-ternary": 0,
        "no-unreachable": 0,
        "no-trailing-spaces": 0,
        "eol-last": 0
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
};