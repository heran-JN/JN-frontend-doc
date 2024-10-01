import React from 'react'

import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import AddIcon from '@/components/icons/AddIcon';
import { Button, ButtonProps } from '@/components/atoms/button/button';


interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,ButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconBtnSize?: "default" | "small";
  variant?: "primary"|"secondary";
}
const IconButtonVariants = cva(
  "",
  {
    variants: {
      iconBtnSize: {
        small: " text-[12px] font-btnSm px-0 py-[5px]",
        default: " text-[15px] font-btnLg px-0 py-[10px] pr-[10px] ",
      },
    },
    defaultVariants: {
      iconBtnSize: "default",
     
    },
  }
)
const ButtonVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: " rounded-md py-0 px-[5px] ",
        secondary: " py-0 px-[5px] ",
      },
    },
    defaultVariants: {
       variant:"primary",
    },
  }
)
const IconButton = ({icon,iconBtnSize, variant,children,...props}:  IconButtonProps) => {
  return (
    <Button variant={variant} className={cn(ButtonVariants({ variant  }))} {...props}>{icon ? icon:<AddIcon variant={iconBtnSize} />}<span className={cn(IconButtonVariants({ iconBtnSize  }))} >{children}</span></Button>
  )
}

export default IconButton