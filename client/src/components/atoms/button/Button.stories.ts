 import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

 import { Button } from './button';


 const meta: Meta<typeof Button> = {
    title:"Component/Atom/Button",
    component: Button,
    parameters:{
        layout:"centered"
    }
  };
   
export default meta;

  type Story = StoryObj<typeof meta>;

  export const PrimaryDefault : Story = {
    args:{ 
            variant: 'primary',
            size:'default',
            disabled: false,
            onClick: fn(),
            children:"Default button"
    }
  }
  export const PrimarySmall : Story = {
    args:{ 
            variant: 'primary',
            size:'small',
            disabled: false,
            onClick: fn(),
            children:"Default button"
    }
  }

  export const SecondaryDefault : Story = {
    args:{ 
            variant: 'secondary',
            size:'default',
            disabled: false,
            onClick: fn(),
            children:"Default button"
    }
  }


  export const SecondarySmall : Story = {
    args:{ 
            variant: 'secondary',
            size:'small',
            disabled: false,
            onClick: fn(),
            children:"Default button"
    }
  }
  