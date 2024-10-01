import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import MultiSelectV2Component from "./multi-select-v2.component";
import { Icons } from "@/components/icons/icon.component";

const meta: Meta<typeof MultiSelectV2Component> = {
  title: "Component/Atom/MultiSelectV2",
  component: MultiSelectV2Component,
  parameters: {
    layout: "centered",
  },
};

const frameworksList = [
  {
    value: "next.js",
    label: "Next.js",
    icon: Icons.dog,
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
    icon: Icons.cat,
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
    icon: Icons.turtle,
  },
  {
    value: "remix",
    label: "Remix",
    icon: Icons.rabbit,
  },
  {
    value: "astro",
    label: "Astro",
    icon: Icons.fish,
  },
];

export default meta;

type Story = StoryObj<typeof meta>;

export const SelectDefault: Story = {
  args: {
    placeholder: "multiple selector",

    size: "default",
    options: frameworksList, // Options for the dropdown
  },
};

export const SelecSmall: Story = {
  args: {
    placeholder: "multiple selector",
    size: "small",
    options: frameworksList, // Options for the dropdown
  },
};
