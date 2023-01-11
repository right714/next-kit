# Next.js Kit

## これはなに

Next.js のプロジェクトを始めるときに使うボイラープレート

## ライブラリ

- [SWR](https://swr.vercel.app/ja)
- [Jotai](https://jotai.org/)
- [classnames](https://www.npmjs.com/package/classnames)
  - CSS Modules を使用するため
- [Next-SEO](https://github.com/garmeeh/next-seo)
- [Vitest](https://vitest.dev/)
- [ChakraUI](https://chakra-ui.com/)
  - [Emotion](https://emotion.sh/docs/introduction)
  - [Framer motion](https://www.framer.com/docs/introduction/)

### その他

- [Prettier](https://prettier.io/)
- [Stylelint](https://stylelint.io/)
- [hygen](https://www.hygen.io/)
  - ページ・コンポーネント雛形作成のため
- [husky](https://typicode.github.io/husky/#/)

## CSS に関して

- CSS Modules を使用

## Chakra UI

- 基本 Layout コンポーネントを使用するために使う（`Stack`や`Grid`など）

### Chakra UI のレスポンシブについて

コンポーネントの Props に対してレスポンシブに指定したオブジェクトを渡す

```jsx
<Stack direction="column" spacing={{ base: "20px", tablet: "40px" }}></Stack>
```

全体に適用される`base` + `tablet`や`desktop`でレスポンシブ化する

以下のブレイクポイントを拡張してある

```typescript
const breakpoints = {
  tablet: "600px",
  desktop: "1024px",
};
```

## Emotion

通常のコンポーネント作成時にも JS 側でスタイルの調整を行いたい場合が出てくる

その場合は、Emotion を使用する

Emotion のレスポンシブ化は`src/utils/style/media-query.ts`を使用する

### メディアクエリ

[参考](https://github.com/right714/base-static#sass-%E3%81%AE%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%E3%82%AF%E3%82%A8%E3%83%AA%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)

## npm script

| コマンド         | 内容                                |
| ---------------- | ----------------------------------- |
| `dev`            | Next.js 開発サーバーを起動          |
| `build`          | ビルド＋エクスポート                |
| `start`          | サーバーを起動                      |
| `lint`           | リント＋ Typescript チェック        |
| `test`           | Vitest 実行                         |
| `test:run`       | No-watch で Vitest                  |
| `test:update`    | テストファイルをアップデート        |
| `test:ui`        | UI 環境で Vitest                    |
| `prettier`       | Prettier                            |
| `prettier:check` | Prettier（チェックのみ／husky 用）  |
| `prettier:fix`   | Prettier（write 付き）              |
| `stylelint`      | Stylelint                           |
| `stylelint:fix`  | Stylelint（fix 付き）               |
| `new:page`       | 新しいページをジェネレート          |
| `new:component`  | 新しいコンポーネントをジェネレート  |
| `npm:outdated`   | node package のアップデートチェック |
| `npm:update`     | node package のアップデート         |

## テスト

Vitest 導入の場合、`.husky/pre-push`の`npm run test:run`のコメントアウトを外すこと
