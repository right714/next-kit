---
to: src/components/feature/<%= name %>/index.stories.tsx
---

import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import <%= name %> from "./index";

export default {
  title: "Components/<%= name %>",
  component: <%= name %>,
  argTypes: {
    children: { control: "text" },
  },
} as ComponentMeta<typeof <%= name %>>;

const Template: ComponentStory<typeof <%= name %>> = args => <<%= name %> {...args}>{args.children}</<%= name %>>;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};
