# Next.js Kit

## これはなに

Next.js のプロジェクトを始めるときに使うボイラープレート

## ライブラリ

- [SWR](https://swr.vercel.app/ja)
- [Jotai](https://jotai.org/)
- [classnames](https://www.npmjs.com/package/classnames)
  - CSS Modules を使用するため
- [tailwindcss](https://tailwindcss.com/)
  - [Cheatsheet](https://tailwindcomponents.com/cheatsheet/)
- [Next-SEO](https://github.com/garmeeh/next-seo)
- [Vitest](https://vitest.dev/)

### その他

- [Prettier](https://prettier.io/)
- [Stylelint](https://stylelint.io/)
- [hygen](https://www.hygen.io/)
  - ページ・コンポーネント雛形作成のため
- [husky](https://typicode.github.io/husky/#/)

## CSS に関して

CSS Modules + tailwindcss<br />
CSS Modules を基本として、tailwindcss はサブ（ひとまずどちらも使えるように対応している状態）

### メディアクエリ

[参考](https://github.com/right714/base-static#sass-%E3%81%AE%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%E3%82%AF%E3%82%A8%E3%83%AA%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)

## npm script

| コマンド | 内容 |
| --- | --- |
| `dev` | Next.js |
| `build` | ビルド＋エクスポート |
| `start` | サーバーを起動 |
| `lint` | リント＋Typescriptチェック |
| `test` | Vitest実行 |
| `test:run` | No-watchでVitest |
| `test:update` | テストファイルをアップデート |
| `test:ui` | UI環境でVitest |
| `prettier` | Prettier |
| `stylelint` | Stylelint |
| `new:page` | 新しいページをジェネレート |
| `new:ui` | 新しいUIコンポーネントをジェネレート |
| `new:feature` | 新しい機能コンポーネントをジェネレート |
| `npm:outdated` | node packageのアップデートチェック |
| `npm:update` | node packageのアップデート |
