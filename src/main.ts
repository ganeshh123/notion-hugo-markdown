const isWindows = process.platform === 'win32';
const isMac = process.platform === 'darwin';

if (isWindows) {
  console.log('\nPress any key to exit');
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on('data', process.exit.bind(process, 0));
}
