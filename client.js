process.chdir(__dirname);
if (process.execPath.indexOf('.exe') !== -1) {
    process.execPath = 'node';
}
var command = process.execPath + ' server.js --clear-cache --client';
var client = require('child_process').execSync(command, {env: process.env, maxBuffer: 5000 * 1024}).toString();
process.stdout.write(client);
