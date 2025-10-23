const { getDefaultConfig } = require('expo/metro-config');
const { withUniwindConfig } = require('uniwind/metro'); 

const config = getDefaultConfig(__dirname);


module.exports = withUniwindConfig(config, {  
  cssEntryFile: './app/global.css',
  dtsFile: './uniwind-types.d.ts'
});