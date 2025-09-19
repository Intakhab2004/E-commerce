"use client"

import { MenuSquare, ShoppingCart, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import logoImage from "@/assests/logo.png";
import { useState } from "react";


type NavBarProps = {
    category: string,
    setCategory: (category: string) => void
}

const Categories = ["home", "bags", "sneakers", "belt"];

export default function NavBar({category, setCategory}: NavBarProps){
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActiveLink = (pathname === "/contact");
    

    return (
        <nav className="flex justify-between items-center relative px-3 md:px-7 pt-1 border-b-5 border-black/5">
            {/* Logo and name */}
            <div className="flex gap-3 items-center">
                <img 
                    src={logoImage.src} 
                    alt="Site logo"
                    height={50} 
                    width={60}
                />
                <p className="text-2xl font-bold">
                    E-Comm
                </p>
            </div>

            {/* Nav Menu */}
            <div className="hidden md:flex lg:gap-10 md:gap-4 justify-between transition-all duration-500">
                {
                    Categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`md:text-base lg:text-lg font-semibold capitalize cursor-pointer ${category === cat ? "text-blue-700": "hover:text-blue-400"} transition-all duration-300`}
                        >
                            {cat}
                        </button>
                    ))
                }
                <Link
                    href="/contact"
                    className={`md:text-base lg:text-lg font-semibold ${isActiveLink ? "text-blue-700": "hover:text-blue-400"} transition-all duration-300`}
                >
                    Contact
                </Link>
            </div>

            {/* Cart & prices */}
            <div className="flex gap-3 text-xl items-center">
                <ShoppingCart className="bg-gray-100 p-[6px] rounded-lg" size={35}/>
                <p className="hidden md:block ml-3 md:text-base lg:text-lg font-semibold">
                    Items
                </p>
                <p className="hidden md:block text-[#262626b6]">
                    $ 0.00
                </p>

                {/* Nav menu for mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden ml-2 bg-gray-100 p-[6px] rounded-lg"
                >
                    {isOpen ? <X size={23}/> : <MenuSquare size={23}/>}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            {
                isOpen && (
                    <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-lg rounded-lg flex flex-col items-baseline gap-2 p-4 z-50 md:hidden text-lg font-medium">
                        {
                            Categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setCategory(cat);
                                        setIsOpen(false);
                                    }}
                                    className={`text-lg font-semibold capitalize cursor-pointer ${category === cat ? "text-blue-700": ""}`}
                                >
                                    {cat}
                                </button>
                            ))
                        }
                        <Link
                            href="/contact"
                            className={`text-lg font-semibold capitalize cursor-pointer ${isActiveLink ? "text-blue-700": ""}`}
                        >
                            Contact
                        </Link>
                    </div>
                )
            }
        </nav>
    )
}