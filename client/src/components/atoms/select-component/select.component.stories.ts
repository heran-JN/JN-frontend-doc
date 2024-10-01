import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SingleSelectComponent from "./select.component";

const meta: Meta<typeof SingleSelectComponent> = {
  title: "Component/Atom/single-select",
  component: SingleSelectComponent,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
const frameworksList = [
  { label: "nextjs", value: "Nextjs" },
  { label: "React", value: "react" },
  { label: "Remix", value: "remix" },
  { label: "Vite", value: "vite" },
  { label: "Nuxt", value: "nuxt" },
];
export const SelectDefault: Story = {
  args: {
    options: frameworksList, // Options for the dropdown
  },
};
