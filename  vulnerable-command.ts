// vulnerable-command.ts (Node.js)
import { exec } from 'child_process';

function listDirectoryContents(directoryName: string): void {
  // 脆弱性: directoryName がサニタイズされずにコマンド文字列に連結される
  const command = `ls -la ${directoryName}`; // Linux/macOS の場合
  // const command = `dir ${directoryName}`; // Windows の場合

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`コマンド実行エラー: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`標準エラー: ${stderr}`);
      return;
    }
    console.log(`標準出力:\n${stdout}`);
  });
}

// テスト用の呼び出し例
// listDirectoryContents("uploads"); // 通常のケース
// listDirectoryContents("uploads; pwd"); // 悪意のある入力 (pwdコマンドも実行される)
// listDirectoryContents("uploads && rm -rf /tmp/test_file"); // 悪意のある入力 (ファイルの削除など)