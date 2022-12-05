import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Button from "./index";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}>{args.children}</Button>;

export const Default = Template.bind({});
Default.args = {
  children: "ボタン",
};
