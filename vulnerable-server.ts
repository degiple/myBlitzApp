// vulnerable-server.ts (Node.js with Express)
// 実行には Express が必要です: npm install express @types/express --save-dev
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/search', (req: Request, res: Response) => {
  const query = req.query.q as string || '';

  // 脆弱性: query がエスケープされずにHTMLレスポンスに直接埋め込まれる
  res.send(`<h1>検索結果: ${query}</h1>
            <p>検索語 '${query}' の結果が見つかりました。</p>`);
});

/*
app.listen(port, () => {
  console.log(`サーバーが http://localhost:${port} で起動しました`);
  console.log(`テストURL例: http://localhost:${port}/search?q=<script>alert('XSS')</script>`);
});
*/