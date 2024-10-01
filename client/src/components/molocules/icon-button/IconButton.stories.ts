 import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import IconButton from './iconButtons';


 const meta: Meta<typeof IconButton> = {
    title:"Component/molecules/IconButton",
    component: IconButton,
    parameters:{
        layout:"centered"
    }
  };
   
export default meta;

  type Story = StoryObj<typeof meta>;

  export const PrimaryDefault : Story = {
    args:{ 
            variant: 'primary',
            iconBtnSize:'default',
            disabled: false,
            onClick: fn(),
            children:"Primary Default Icon Button"
    }
  }
  export const PrimarySmall : Story = {
    args:{ 
            variant: 'primary',
            iconBtnSize:'small',
            disabled: false,
            onClick: fn(),
            children:"Primary Small Icon Button"
    }
  }

  export const SecondaryDefault : Story = {
    args:{ 
            variant: 'secondary',
            iconBtnSize:'default',
            disabled: false,
            onClick: fn(),
            children:"Secondary Default Icon Button"
    }
  }


  export const SecondarySmall : Story = {
    args:{ 
            variant: 'secondary',
            iconBtnSize:'small',
            disabled: false,
            onClick: fn(),
            children:"Secondary Small"
    }
  }

