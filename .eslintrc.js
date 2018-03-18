module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  plugins: [
    "react"
  ],
  extends: ["standard"],
  rules: {
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': [0, 2],//缩进风格
    'spaced-comment': [0, 0],
    'space-before-function-paren': ['error', {"anonymous": "always", "named": "never", "asyncArrow": "always"}],//函数定义时括号前面要不要有空格，never不要
  }
};
