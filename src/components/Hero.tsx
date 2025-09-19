"use client"

import { useState } from "react";
import SideBar from "./Sidebar"
import { Filter } from "lucide-react";


export default function Heropage(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    return (
        <section className="flex justify-between px-3 md:px-7 mt-3">
            <SideBar 
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
            />

            <div className="flex flex-col gap-2 w-full md:w-[77%]">
                {/* Button for opening collapsible sidebar */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="block md:hidden"
                >
                    <Filter className="bg-gray-100 p-[6px] rounded-lg" size={30}/>
                </button>


                {/* Main container */}
                <div className="w-full bg-pink-200">
                    I am main container
                </div>
            </div>
        </section>

        
    )
}