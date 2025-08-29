# @dafeng-innov/blueprinter
基於 [@funboxteam/blueprinter](https://github.com/funbox/blueprinter) 的 [API Blueprint](https://apiblueprint.org/) 渲染工具

主要的調整有：
1. 移除俄文相關內容
2. 新增繁體中文語系，並設為預設語系 (原本是英文)
3. 將 `static` 資料夾納入版本控制，讓使用者可用 `npm install dafeng-innov/blueprinter` 方式引用套件

優點包括：
1. 可即時預覽文件渲染結果
2. 可轉檔為靜態 HTML 文件
3. 列印友善，可利用瀏覽器列印功能轉為版面簡潔的 PDF 文件

## 引用套件
```shell
npm install --save-dev dafeng-innov/blueprinter#df-zh
```

## 常用指令
### 查看即時預覽
```shell
npx blueprinter -i doc.apib -s
```
即可在 http://localhost:3001 查看渲染後的即時結果

### 轉檔為靜態 HTML
```shell
npx blueprinter -i doc.apib -o doc.html
```

## 指令選項
- `-i, --input <file>` — 指定來源 APIB 檔案
- `-o, --output <file>` — 指定輸出的 HTML 檔案名稱
- `-s, --server` — 啟動即時預覽模式
- `-h, --host <host>` — 指定即時預覽的主機位址，預設值為 `127.0.0.1`
- `-p, --port <port>` — 指定即時預覽的通訊部，預設值為 `3000`
- `--strict` — 啟用 "嚴格" 解析模式，一旦有警告訊息會導致建置錯誤
- `--css <file>` — 指定自訂 CSS 樣式檔路徑
- `--locale <locale>` — 指定操作介面語系，預設值為 `zh-Hant` (繁體中文)，可用的語系有 `en` (英文) 和 `zh-Hant`
- `--favicon <file>` — 指定自訂網站圖示 (favicon)，只接受 PNG 圖檔
