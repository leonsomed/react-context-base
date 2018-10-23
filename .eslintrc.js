module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
      "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "indent": [
           "error",
           4,
           { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-underscore-dangle": [
          "error",
          { "allow": ["_id", "_error"] }
        ],
        'no-restricted-syntax': [0, 'ForOfStatement'],
    }
};