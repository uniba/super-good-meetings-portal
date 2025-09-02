# super-good-meetings-portal

## 開発

```
$ npm i
$ npm run dev
$ open http://localhost:3000
```

## デプロイ

https://github.com/uniba/super-good-meetings-portal/deployments

***

## お知らせの更新方法

1. develブランチの該当ディレクトリに、拡張子.md のマークダウン書式のファイルを追加する
  - お知らせ：\_newsディレクトリに追加
  - リリースノート：\_release_notesディレクトリに追加
  - 活用事例：\_worksディレクトリに追加
  - ![CleanShot 2025-04-23 at 12 45 44@2x](https://github.com/user-attachments/assets/5d492ab0-de6e-46fd-ba48-ef68472ef63a)
2. Commit changesボタンを押下して、変更内容をcommitすると、ステージング環境に更新内容が反映される
  - ![CleanShot 2025-04-23 at 12 46 27@2x](https://github.com/user-attachments/assets/aa79caef-596f-4a5d-9afc-ddf663330a17)
3. ステージング環境の内容を確認し、問題なければ、develブランチからmasterブランチに向けたPull Requestを作成する
  - ![CleanShot 2025-04-23 at 12 49 29@2x](https://github.com/user-attachments/assets/bc73b6ee-4c70-466c-ad5c-04ad94eff12a)
4. Pull Requestを開いてMerge pull requestボタンを押下すると、mergeが実行され、本番環境に更新内容が反映される
  - ![CleanShot 2025-04-23 at 12 50 34@2x](https://github.com/user-attachments/assets/124554ce-bb78-4ac7-8759-a44988fe94c7)

