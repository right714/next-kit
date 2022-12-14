module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "inputPath",
        message: "パスを入力してください（例：about/company）",
        validate: answer => {
          if (answer) {
            return true;
          }
        },
      },
      {
        type: "confirm",
        name: "hasMeta",
        message: "メタセクションを使用しますか？",
      },
    ];

    return inquirer.prompt(questions).then(answers => {
      const { inputPath, hasMeta } = answers;
      let path = "index";
      if (inputPath) {
        path = inputPath.slice(-1) === "/" ? `${inputPath}index` : inputPath;
      }
      const filename = path.split("/").slice(0, -1).join("");

      return {
        path,
        filename,
        hasMeta,
      };
    });
  },
};
