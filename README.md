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

## リリースノートの更新方法

1. 該当するディレクトリに、リリースノートのファイルを格納する
- super-good-meetings-portal/_release_notes/ の中に、リリースノートのファイルを格納する（前回のリリースノートのファイルをコピーして使うと早い）

2. https://supergoodmeetings.uni.ba/ で追加したリリースノートの見え方を確認する
- ファイルをアップロードしてから数十秒ほどで上記 URL のページに反映されます

3. devel ブランチで行った変更（1の操作）を master ブランチに反映して、リリースノートを本番環境に反映させる
- PullRequestを作成し、master にマージする。数十秒すると https://supergoodmeetings.com/ に内容が反映される


## お知らせの更新方法

- Master ブランチの該当ディレクトリに、拡張子.md のマークダウン書式のファイルを追加することで更新できる
  - お知らせ：\_newsディレクトリに追加
  - リリースノート：\_release_notesディレクトリに追加
  - 活用事例：\_worksディレクトリに追加
- create new file 
<img width="1339" alt="スクリーンショット 2021-01-26 10 25 47" src="https://user-images.githubusercontent.com/55315690/105786977-62739180-5fc1-11eb-894a-167026c020a7.png">

- commit new fileで、本番環境に反映される
<img width="1341" alt="スクリーンショット 2021-01-26 10 26 39" src="https://user-images.githubusercontent.com/55315690/105786988-66071880-5fc1-11eb-9900-93451bb426c1.png">
