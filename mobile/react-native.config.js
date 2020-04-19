const fs = require('fs');
const path = require('path');

module.exports = {
  dependencies: {
    '<dependency>': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink
      },
    },
  },
  reactNativePath:  fs.realpathSync(path.resolve(require.resolve('react-native-windows/package.json'), '..')),
};