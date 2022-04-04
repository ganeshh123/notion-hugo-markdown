const isWindows = process.platform === 'win32';
//const isMac = process.platform === 'darwin';

export const terminate = (e?: Error): void => {
  if (e) {
    console.log('An error occured!');
    console.log(e.name);
    console.log(e.name);
    console.log(e.stack);
  }

  if (isWindows) {
    console.log('\nPress any key to exit');
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('data', process.exit.bind(process, 0));
  }
};
