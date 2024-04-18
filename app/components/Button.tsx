import React from 'react'
import Link from 'next/link';
import classNames from 'classnames'
import { cva, VariantProps } from "class-variance-authority"
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";



type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
    children: React.ReactNode;
}

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    href?: never;
}

type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps);

const buttonClasses = cva("rounded-full inline-flex items-center", {
    variants: {
        variant: {
            primary: "bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow, text-shadow]",
            secondary: "text-off-white bg-white bg-opacity-10 hover:bg-opacity-30 transition-colors ease-in border border-bar backdrop-filter-[12px]",
            tertiary: "",
        },
        size: {
            small: "text-xs px-3 h-7",
            medium: "text-sm px-4 h-8",
            large: "text-md px-6 h-12",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "medium",
    }
})

export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => <span className={classNames("highlight", className)}>{children}</span>;


export const Button = ({ children,  variant, size, ...props }: ButtonProps) => {
    const classes = buttonClasses({ variant, size, className: props.className });

    if ("href" in props && props.href !== undefined) {
        return (
          <Link {...props} className={classes}>
            {children}
          </Link>
        );
      }
    
      return (
        <button {...props} className={classes}>
          {children}
        </button>
      );
}
