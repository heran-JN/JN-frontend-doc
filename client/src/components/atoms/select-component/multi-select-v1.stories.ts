import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Icons } from "@/components/icons/icon.component";
import MultiSelectV1Component from "./multi-select-v1.component";

type optionProp = {
  label: string;
  value: {
    name: string;
    age: number;
  };
};

const meta: Meta<typeof MultiSelectV1Component> = {
  title: "Component/Atom/MultiSelectV1",
  component: MultiSelectV1Component,
  parameters: {
    layout: "centered",
  },
};

const frameworksList = [
  { label: "nextjs", value: "Nextjs" },
  { label: "React", value: "react" },
  { label: "Remix", value: "remix" },
  { label: "Vite", value: "vite" },
  { label: "Nuxt", value: "nuxt" },
];

export default meta;

type Story = StoryObj<typeof meta>;
const dropdownOption: optionProp[] = [
  {
    label: "Item 1",
    value: {
      name: "item 1",
      age: 4,
    },
  },
  {
    label: "Item 2",
    value: {
      name: "item 2",
      age: 34,
    },
  },
];
const OPTIONS = [
  { label: "nextjs", value: "Nextjs" },
  { label: "React", value: "react" },
];
export const SelectDefault: Story = {
  args: {
    placeholder: "multiple selector",
    defaultOptions: OPTIONS,
    creatable: true,
    options: frameworksList, // Options for the dropdown
  },
};
