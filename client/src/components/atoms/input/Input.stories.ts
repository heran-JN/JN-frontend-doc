import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Input } from './input';


 const meta: Meta<typeof Input> = {
    title:"Component/Atom/Input",
    component: Input,
    parameters:{
        layout:"centered"
    },
    argTypes: {
        type: {
          control: { type: "text" },
          description: "The input type (e.g., text, password, email, etc.)",
          defaultValue: "text",
        },
        placeholder: {
          control: { type: "text" },
          description: "Placeholder text for the input field.",
          defaultValue: "Enter text...",
        },
        error: {
          control: { type: "text" },
          description: "Error message for validation.",
        },
        disabled: {
          control: { type: "boolean" },
          description: "Whether the input is disabled.",
          defaultValue: false,
        },
      },
  };
   
export default meta;

type Story = StoryObj<typeof meta>;

export const InputDefault : Story = {
    args:{ 
        type: "text",
        placeholder: "Enter your text here...",
    }
  }
  export const PasswordInput : Story = {
    args:{
        type: "password",
        placeholder: "Enter your password",
      }
  }

  export const DisabledInput : Story = {
    args:{
        type: "text",
        placeholder: "Disabled input",
        disabled: true,
      }
  }

  export const InputError : Story = {
    args:{
        type: "text",
        placeholder: "Invalid input",
        error: "This field is required", 
      }
  }