exports.prompt = ({ inquirer }) => {
  const questions = [
    {
      type: "input",
      name: "componentName",
      message: "コンポーネントの名前を入力してください（パスカルケースへ変換されます/例:test example→TestExample）\n",
    },
    {
      type: "select",
      name: "componentType",
      message: "コンポーネントの種類を選択してください",
      choices: ["ui", "features", "layouts"],
    },
  ];

  return inquirer.prompt(questions).then(answers => {
    const { componentName, componentType } = answers;

    return {
      name: componentName || "Sample",
      type: componentType,
    };
  });
};
