import React from 'react'
import Container from "../components/container";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';

const footerLinks = [
    {
        title: 'Products',
        links: [
            { title: "Features", href: "#" },
            { title: "Integrations", href: "#" },
            { title: "Pricing", href: "#" },
            { title: "Changelog", href: "#" },
            { title: "Docs", href: "#" },
            { title: "Linear Method", href: "#" },
            { title: "Download", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { title: "About us", href: "#" },
            { title: "Blog", href: "#" },
            { title: "Careers", href: "#" },
            { title: "Customers", href: "#" },
            { title: "Brand", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { title: "Community", href: "#" },
            { title: "Contact", href: "#" },
            { title: "DPA", href: "#" },
            { title: "Terms of service", href: "#" },
        ],
    },
    {
        title: "Developers",
        links: [
            { title: "API", href: "#" },
            { title: "Status", href: "#" },
            { title: "GitHub", href: "#" },
        ],
    },
]

const Footer = () => {
    return (
        <footer className='border-t border-bar mt-12 py-[5.6rem] text-sm'>
            <Container className='flex justify-between flex-col lg:flex-row'>
                <div>
                    <div className='flex flex-row lg:flex-col justify-between h-full'>
                        <h1 className='text-grey font-semibold text-lg'>LOGO</h1>
                        <div className='mt-auto flex items-center gap-4'>
                            <FaXTwitter />
                            <FaYoutube />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    {footerLinks.map((column) => (
                        <div key={column.title} className='min-w-[18rem] mt-10 lg:mt-0'>
                            <h3 className='mb-3 font-medium'>{column.title}</h3>
                            <ul>
                                {column.links.map((link) => (
                                    <li key={link.href} className='[&_a]:last:mb-0'>
                                        <Link className='text-grey mb-3 block' href={link.href}>
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </footer>
    )
}

export default Footer