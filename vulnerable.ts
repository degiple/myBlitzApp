// vulnerable.ts
function displayMessage(userInput: string): void {
  const messageDiv = document.getElementById('message');
  if (messageDiv) {
    // 脆弱性: userInput がサニタイズされずにinnerHTMLに設定される
    messageDiv.innerHTML = "ユーザーからのメッセージ: " + userInput;
  }
}

// テスト用の呼び出し例 (ブラウザのコンソールなどで実行)
// displayMessage("<img src=x onerror=alert('XSS')>");
// displayMessage("<script>alert('XSS in script tag')</script>");
