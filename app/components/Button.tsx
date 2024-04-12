import React from 'react'
import Link from 'next/link';
import classNames from 'classnames'
import { cva, VariantProps } from "class-variance-authority"

interface ButtonProps extends VariantProps<typeof buttonClasses> {
    children: React.ReactNode;
    className?: string;
    href: string
}

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

const Button = ({ children, href, variant, size }: ButtonProps) => {
    return (
        <Link href={href} className={buttonClasses({ variant, size })}>
            {children}
        </Link>
    )
}

export default Button