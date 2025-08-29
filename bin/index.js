#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { renderAndBuild } = require('./main');
const { renderAndServe } = require('./live');

const argv = yargs(hideBin(process.argv))
  .usage('Usage: $0 [options] -i infile [-o outfile -s]')
  .example('$0 -i example.apib -o output.html', 'Render to HTML')
  .example('$0 -i example.apib -s', 'Start live server')
  .option('i', { alias: 'input', describe: 'Input file' })
  .option('o', { alias: 'output', describe: 'Output file' })
  .option('s', { alias: 'server', describe: 'Start a local live preview server' })
  .option('h', { alias: 'host', describe: 'Address to bind local preview server to', default: '127.0.0.1' })
  .option('p', { alias: 'port', describe: 'Port for local preview server', default: 3001 })
  .option('strict', { describe: 'Strict mode' })
  .option('css', { describe: 'Custom CSS file' })
  .option('favicon', { describe: 'Custom favicon' })
  .option('locale', { describe: 'Set locale', default: 'zh-Hant', choices: ['zh-Hant', 'en'] })
  .argv;

const exit = (err) => {
  if (err) {
    console.log(err.message);
    process.exit(1);
  }
  process.exit();
};

const argvError = () => {
  console.log('Invalid arguments');
  yargs.showHelp();
  process.exit(1);
};

if (argv.server) {
  if (!argv.input) argvError();

  renderAndServe(argv.input, argv.css, argv.port, argv.host, argv.locale)
    .catch(error => exit(error));
} else {
  if (!argv.input || !argv.output) argvError();

  renderAndBuild(argv.input, argv.css, argv.favicon, argv.output, argv.locale, argv.strict)
    .then(() => exit())
    .catch(error => exit(error));
}