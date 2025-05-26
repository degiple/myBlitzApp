import { Client } from "pg" // PostgreSQLクライアントライブラリの例

async function getUserData(userId: string): Promise<void> {
  const client = new Client({
    user: "db_user",
    host: "your_db_host",
    database: "your_db_name",
    password: "your_db_password", // このパスワード自体もハードコードされたシークレットの警告対象になり得ます
    port: 5432,
  })

  try {
    await client.connect()
    // 脆弱性: userIdがエスケープ/パラメータ化されていない
    const query = `SELECT * FROM users WHERE id = '${userId}'`
    console.log(`Executing query: ${query}`)
    const res = await client.query(query)
    if (res.rows.length > 0) {
      console.log("User data:", res.rows[0])
    } else {
      console.log("No user found.")
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error("Database error:", err.message)
    } else {
      console.error("An unknown database error occurred")
    }
  } finally {
    await client.end()
  }
}

// テスト用の呼び出し例 (実際のリクエストを模倣)
// const vulnerableInput = "1' OR '1'='1"; // 一般的なSQLインジェクション試行
// getUserData(vulnerableInput);

// 動作させるには `pg` と `@types/pg` のインストールが必要です:
// npm install pg
// npm install --save-dev @types/pg
// また、実際に接続できるデータベース環境が必要です。
