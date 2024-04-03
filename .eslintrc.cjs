module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": "airbnb-base",
    "overrides": [],
    "parserOptions": {
      "ecmaVersion": "latest",
    },
    "rules": {
      "no-console": 0,
      "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
      "import/extensions": [0, { "js": "always" }],
      "linebreak-style": 0
    }
  }
