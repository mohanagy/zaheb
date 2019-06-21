module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./src'],
    }],
    [
      '@babel/plugin-transform-modules-commonjs',
      {
        strictMode: false,
        allowTopLevelThis: true,
        loose: true,
      },
    ],
  ],
}
