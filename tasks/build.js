// this build program basically from this repository 'https://github.com/SimulatedGREG/electron-vue',
// and I have done some change for suit my project.

const exec = require('child_process').exec;
const packager = require('electron-packager');
const path = require('path');

function bundle () {
  let pack = exec('yarn run bundle')

  pack.stdout.on('data', data => console.log(data));
  pack.stderr.on('data', data => console.error(data));
  pack.on('exit', code => build());
}

function build() {
  packager({
    arch: 'x64',
    platform: 'darwin',
    dir: path.join(__dirname, '../'),
    out: path.join(__dirname, '../builds'),
    overwrite: true,
    ignore: /(yarn\.lock|yarn-error\.log|tasks)/
  }, (err, appPaths) => {
    if (err) {
      console.error('Error from `electron-packager` when building app...');
      console.error(err);
    } else {
      console.log('Build successful!');
      console.log(appPaths);
    }
  });
}

bundle();
