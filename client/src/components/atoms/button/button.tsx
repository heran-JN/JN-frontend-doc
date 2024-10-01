import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",

        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        primary: "rounded-lg border border-lg bg-primary text-primary-foreground hover:bg-primary-hoverBg hover:text-primary-hoverForeground group-hover:bg-primary-hoverBg group-hover:text-primary-hoverForeground shadow  ",
        secondary: "rounded-sm border border-lg bg-secondary text-btnLg font-btnLg text-secondary-foreground   shadow hover:bg-secondary-hoverBg hover:text-secondary-hoverForeground group-hover:bg-secondary-hoverBg group-hover:text-secondary-hoverForeground",
      },
      size: {
        small: " text-[12px] font-btnSm px-[5px] py-[5px]   ",
        default: " text-[15px] font-btnLg px-[20px] py-[10px]  ",
        icon: "h-[37px] w-[37px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
