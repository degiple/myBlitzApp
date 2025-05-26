// vulnerable-sql.ts (Node.js with a hypothetical DB client)
// 実際には 'pg', 'mysql2' などのライブラリを使用します。
// npm install pg @types/pg --save-dev (PostgreSQLの場合)

// import { Client } from 'pg'; // PostgreSQLの例

// async function getUserById(userId: string): Promise<any> {
//   const client = new Client({
//     user: 'dbuser',
//     host: 'database.server.com',
//     database: 'mydb',
//     password: 'dbpassword', // これ自体もハードコードされたシークレットの可能性
//     port: 5432,
//   });
//   await client.connect();

//   // 脆弱性: userIdがサニタイズされずに直接クエリに埋め込まれている
//   const query = `SELECT * FROM users WHERE id = '${userId}'`;
//   console.log(`実行クエリ: ${query}`); // デバッグ用、実際には表示しない

//   try {
//     const res = await client.query(query);
//     console.log(res.rows[0]);
//     return res.rows[0];
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.end();
//   }
// }

// テスト用の呼び出し例
// getUserById("123"); // 通常
// getUserById("1' OR '1'='1"); // 悪意のある入力
// getUserById("1'; DROP TABLE users; --"); // 非常に危険な入力