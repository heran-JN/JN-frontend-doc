import type { Meta, StoryObj } from '@storybook/react';

import ColorPalette from './colors';


 const meta: Meta<typeof ColorPalette> = {
    title:"Component/Colors/ColorPalette",
    component: ColorPalette,
    parameters:{
        layout:"centered"
    }
  };
   
export default meta;

type Story = StoryObj<typeof meta>;

export const Colors : Story = {}