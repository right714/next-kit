exports.prompt = ({ inquirer }) => {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "コンポーネントの名前を入力してください（パスカルケースへ変換されます/例:test example→TestExample）\n",
      validate: answer => {
        if (answer) {
          return true;
        }
      },
    },
    {
      type: "select",
      name: "type",
      message: "コンポーネントの種類を選択してください",
      choices: ["atoms", "ui", "features", "layouts"],
    },
    {
      type: "confirm",
      name: "useStorybook",
      message: "Storybookを使用しますか？",
    },
    {
      type: "confirm",
      name: "useTest",
      message: "テストを使用しますか？",
    },
  ];

  return inquirer.prompt(questions).then(answers => {
    return {
      ...answers,
    };
  });
};
