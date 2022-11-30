module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "inputPath",
        message: "パスを入力してください\n  ※末尾に.tsxが追加されてジェネレートされます\n  ※末尾がスラッシュの場合、`index`が追加されます"
      },
      {
        type: "confirm",
        name: "hasMeta",
        message: "メタセクションを使用しますか"
      },
    ];

    return inquirer
      .prompt(questions)
      .then(answers => {
        const { inputPath, hasMeta, } = answers;
        let path = "index";
        if (inputPath) {
          path = inputPath.slice(-1) === "/" ? `${inputPath}index` : inputPath;
        }
        const filename = path.split("/").slice(0, -1).join("");

        return {
          path,
          filename,
          hasMeta,
        }
      });
  }
}