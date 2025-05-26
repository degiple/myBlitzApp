// secrets.ts
const API_KEY = "sk_test_THIS_IS_A_DUMMY_VERY_SECRET_KEY_12345abcdef"; // 脆弱性
const DATABASE_PASSWORD = "MySuperSecretPassword123!";               // 脆弱性
const OLD_API_TOKEN = "ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";    // 脆弱性

function connectToThirdPartyService(): void {
  console.log(`Connecting with API Key: ${API_KEY}`);
  // ... 実際の接続処理
}

class DbConnector {
  private password = "anotherHardcodedPassword!"; // 脆弱性

  constructor() {
    // ...
  }

  connect() {
    console.log(`Connecting to DB with password: ${this.password}`);
  }
}