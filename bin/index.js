#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { renderAndBuild } = require('./main');
const { renderAndServe } = require('./live');

const yargsInstance = yargs(hideBin(process.argv))
  .usage('用法：$0 [選項] -i 輸入檔案 [-o 輸出檔案 -s]')
  .example('$0 -i example.apib -o output.html', '輸出成 HTML')
  .example('$0 -i example.apib -s', '啟動即時預覽')
  .option('i', { alias: 'input', describe: '輸入檔案' })
  .option('o', { alias: 'output', describe: '輸出檔案' })
  .option('s', { alias: 'server', describe: '啟動本地即時預覽伺服器' })
  .option('h', { alias: 'host', describe: '要綁定本地即時預覽伺服器的位址', default: '127.0.0.1' })
  .option('p', { alias: 'port', describe: '本地即時預覽伺服器的通訊埠', default: 3001 })
  .option('strict', { describe: '嚴格模式' })
  .option('css', { describe: '自訂 CSS 檔案' })
  .option('favicon', { describe: '自訂網站圖示 (favicon)' })
  .option('locale', { describe: '設定語系', default: 'zh-Hant', choices: ['zh-Hant', 'en'] });

const argv = yargsInstance.argv;

const exit = (err) => {
  if (err) {
    console.log(err.message);
    process.exit(1);
  }
  process.exit();
};

const argvError = () => {
  console.log('無效引數');
  yargsInstance.showHelp();
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