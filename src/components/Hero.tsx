"use client"

import { useState } from "react";
import SideBar from "./Sidebar"
import { Filter } from "lucide-react";
import img1 from "@/assests/img1.png";
import ItemCard from "./ItemCard";
import { productTypes } from "./ItemCard";


export default function Heropage({filteredProducts}: {filteredProducts: productTypes[]}){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");

    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedPrices, setSelectedPrices] = useState<string[]>([]);

    // Filtering logic
    const filterItems = filteredProducts.filter((product) => {
        // Brand filter
        if(selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;

        // Price filter
        if (selectedPrices.length > 0) {
            let match = false;
            for (let range of selectedPrices) {
                if(range === "$100 - $500" && product.discountPrice > 100 && product.discountPrice <= 500) match = true;
                if(range === "$500 - $1000" && product.discountPrice > 500 && product.discountPrice <= 1000) match = true;
                if(range === "$1000 - $1500" && product.discountPrice > 1000 && product.discountPrice <= 1500) match = true;
                if(range === "$1500 - $2000" && product.discountPrice > 1500 && product.discountPrice <= 2000) match = true;
                if(range === "$2000+" && product.discountPrice > 2000) match = true;
            }
            if(!match) return false;
        }

        return true;
    })


    // Sorting logic
    const sortedProducts = [...filterItems].sort((a, b) => {
        let valA, valB;

        if(sortBy === "name"){
            valA = a.title.toLowerCase();
            valB = b.title.toLowerCase();
        } 
        else if(sortBy === "price"){
            valA = a.discountPrice;
            valB = b.discountPrice;
        } 
        else{
            valA = a.starRating;
            valB = b.starRating;
        }

        if(valA < valB) return sortOrder === "asc" ? -1 : 1;
        if(valA > valB) return sortOrder === "asc" ? 1 : -1;
        return 0;
    })
    
    // Pagination logic
    const itemsPerPage = 8;
    const totalPages = Math.ceil(sortedProducts.length/itemsPerPage);
    const paginatedProducts = sortedProducts.slice(
        (currentPage-1)*itemsPerPage,
        currentPage*itemsPerPage
    )
    const pageNumberArray = Array.from({length: totalPages});

    return (
        <section className="flex justify-between px-3 md:px-7 mt-3">
            <SideBar 
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                selectedColors={selectedColors}
                setSelectedColors={setSelectedColors}
                selectedPrices={selectedPrices}
                setSelectedPrices={setSelectedPrices}
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
                <div className="w-full">
                    <div className="w-full h-[23rem] flex flex-col md:flex-row justify-around items-center bg-gradient-to-b from-blue-600 to-blue-800 rounded-lg">
                        <div className="w-[90%] md:w-[25%] flex flex-col">
                            <h1 className="text-lg font-semibold text-white">
                                Adidas Men Running Sneakers
                            </h1>
                            <p className="text-[15px] font-semibold text-white/50 mb-6">
                                Performance and Design. Taken right to the edge.
                            </p>

                            <button className="bg-yellow-300 text-lg font-semibold p-3 rounded-md cursor-pointer hover:scale-105 transition-all duration-400">
                                Shop now
                            </button>
                        </div>

                        <img
                            src={img1.src}
                            className="w-[65%] md:w-[50%] transform scale-x-[-1]"
                        />
                    </div>

                    {/* Sort items bar */}
                    <div className="w-full flex items-center justify-between bg-gray-200 mt-4 rounded-md p-2 px-4">
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-semibold mr-3">
                                Sort by:
                            </label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="p-2 text-sm text-gray-700 bg-white rounded-lg shadow-sm focus:outline-none cursor-pointer"
                            >
                                <option value="name">Name</option>
                                <option value="price">Price</option>
                                <option value="popularity">Popularity</option>
                            </select>

                            <button
                                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                                className="text-sm bg-white px-2 py-[6px] rounded-md cursor-pointer"
                            >
                                {sortOrder === "asc" ? "⬆ Asc" : "⬇ Desc"}
                            </button>
                        </div>
                    </div>

                    {/* Items card */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                        {
                            paginatedProducts.length > 0 ? (
                                paginatedProducts.map((item) => (
                                    <ItemCard 
                                        key={item.id} 
                                        product={item} 
                                    />
                                ))
                            )
                            :
                            (
                                <div className="col-span-full flex justify-center items-center">
                                    <p className="w-[17rem] text-lg text-center font-semibold px-4 py-2 rounded-md">
                                        No Product available in the selected category
                                    </p>
                                </div>
                            )
                        }
                    </div>
                    
                    {/* Pagination */}
                    {
                        pageNumberArray.length > 0 && (
                            <div className="w-full flex justify-center items-center gap-2 my-6 py-2 bg-gray-200 rounded-md">
                                {
                                    pageNumberArray.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentPage(i + 1)}
                                            className={`px-3 py-1 rounded-md border ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}