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
            primary: "bg-primary-gradient hover:text-shadow hover:shadow-primary",
            secondary: "",
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

const Button = ({ children, className, href, variant, size }: ButtonProps) => {
    return (
        <Link href={href} className={buttonClasses({ variant, size })}>
            {children}
        </Link>
    )
}

export default Button