'use client'
import React, { useEffect, useState } from 'react'
import Container from "../components/container";
import Link from 'next/link';
import { Button } from './Button';
import classNames from 'classnames';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevOpen => !prevOpen);
    }

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) html.classList.toggle("overflow-hidden", isOpen);
      }, [isOpen]);

      useEffect(() => {
        const closeHamburgerNavigation = () => setIsOpen(false);
    
        window.addEventListener("orientationchange", closeHamburgerNavigation);
        window.addEventListener("resize", closeHamburgerNavigation);
    
        return () => {
          window.removeEventListener("orientationchange", closeHamburgerNavigation);
          window.removeEventListener("resize", closeHamburgerNavigation);
        };
      }, [setIsOpen]);


    return (
        <header className='fixed top-0 w-full z-20 left-0 border-b border-b-bar backdrop-blur-[12px]'>
            <Container className='flex items-center  h-[var(--navigation-height)]'>
                <Link href="/" className='flex items-center text-md'>
                    Linear
                </Link>

                <div
                    className={classNames("transition-[visibility] md:visible", isOpen ? "visible" : "delay-500 invisible")}>
                    <nav
                        className={classNames
                            ('h-[calc(100vh-var(--navigation-height))] overflow-auto md:block fixed md:relative top-[var(--navigation-height)] left-0 w-full bg-background md:h-auto md:top-0 md:w-auto md:bg-transparent md:opacity-100 transition-opacity duration-500 md:translate-x-0', isOpen ? "opacity-100 translate-x-0" : " opacity-0 translate-x-[-100vw]")}>
                        <ul
                            className='flex flex-col px-2 md:flex-row md:items-center h-full [&_a]:text-md md:[&_a]:text-sm [&_a]:flex [&_a]:items-center [&_a]:h-navigation-height [&_a]:w-full [&_a:hover]:text-grey [&_a]:transition-colors [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&-li]:border-none'>
                            <li>
                                <Link href="/">Features</Link>
                            </li>
                            <li>
                                <Link href="/">Methods</Link>
                            </li>
                            <li className='md:hidden lg:block'>
                                <Link href="/">Customers</Link>
                            </li>
                            <li className='md:hidden lg:block'>
                                <Link href="/">Changelog</Link>
                            </li>
                            <li className='md:hidden lg:block'>
                                <Link href="/">Intergartions</Link>
                            </li>
                            <li>
                                <Link href="/">Pricing</Link>
                            </li>
                            <li>
                                <Link href="/">Company</Link>
                            </li>

                        </ul>
                    </nav>
                </div>

                <div className='ml-auto h-full flex items-center'>
                    <Link href="/" className='text-sm mr-6'>Log In</Link>
                    <Button href="#" variant="primary">Sign Up</Button>
                </div>

                <button className='ml-6 md:hidden' onClick={toggleMenu}>
                    <span className='sr-only'>Toggle menu</span>
                    {isOpen ? <IoCloseSharp size={30} /> : <GiHamburgerMenu size={30} />}
                </button>
            </Container>
        </header>
    )
}

export default Header