const utils = require("../../utils");

const { toUpperCaseFirstChar } = utils;

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "componentName",
        message: "コンポーネントの名前を入力してください\n  そのままフォルダ名になります（1文字目は大文字に変換）\n"
      },
    ];

    return inquirer
      .prompt(questions)
      .then(answers => {
        const { componentName } = answers;

        return {
          name: componentName ? toUpperCaseFirstChar(componentName) : "Sample",
        }
      });
  }
}