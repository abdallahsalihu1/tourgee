"use client";
import Image from "next/image";
import Link from "next/link";
import { PiUser } from "react-icons/pi";
import { TbMenu } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Avatar from '@mui/material/Avatar'

export default function Navbar() {

    const { data: session } = useSession() 
    console.log(session);
    

    const [navOpen, setNavOpen] = useState(false)

    const navLinks = [
        {
            label: "Home",
            url: "/"
        },
        {
            label: "About Us",
            url: "/about"
        },
        {
            label: "Feed",
            url: "/feed"
        },
        {
            label: "Travel Tips",
            url: "/tips"
        },
        {
            label: "Review",
            url: "/review"
        }
    ]
    return (
        <main className="flex items-center justify-between md:px-10 md:py-3 p-3 shadow-md">
            <Link href={"/"} className="z-50">
                <Image
                    src={"/logo.png"}
                    alt="logo"
                    width={800}
                    height={800}
                    className="w-25 h-20"
                />
            </Link>

            {/* Tablet and Desktop Nav */}
        
             <div className="flex items-center gap-15 px-10 ml-auto max-md:hidden">
                {
                    navLinks.map((item, index) => (
                        <Link key={index} href={item.url} className="hover:text-blue-600
                         transition-colors duration-200">{item.label}</Link>
                    ))
                }
            </div>
            
                {/* Mobile Nav */}
                <div className={`bg-white h-dvh w-full md:hidden absolute top-0 left-0 items-center flex-col
                    pt-20 gap-15  ${navOpen ? "flex": "hidden"}`}>
                        {
                            navLinks.map((item, index) => (
                                <Link key={index} href={item.url} className="hover:text-blue-600 transition-colors duration-200 text-2xl">{item.label}</Link>
                            ))
                        }
                    </div>

            {
                session ? <Link href={"/profile"}><Avatar alt={session?.user?.name} src={session?.user?.image} /></Link>
                    : (
                        <Link className="flex items-center gap-1 hover:text-blue-600 transition-all duration-200 max-md:ml-auto z-50" href={"/signin"}><p className="max-md:hidden">Sign In</p>
                        <PiUser className="max-md:text-2xl text-lg" /></Link>
                    )
            }

            <button onClick={() => setNavOpen(!navOpen)} className="text-2xl md:hidden ml-5 z-50">
                {
                    navOpen ? <IoMdClose /> : <TbMenu />
                }
            </button>
        </main>
    )   
}