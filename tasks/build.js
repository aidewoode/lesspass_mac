const packager = require('electron-packager');
const path = require('path');

packager({
  arch: 'x64',
  platform: 'darwin',
  dir: path.join(__dirname, '../'),
  out: path.join(__dirname, '../builds'),
  overwrite: true,
  igonre: /(tasks)/
})
