"use client"

import { ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { bgColors } from "@/helpers/colorSelector";

type sidebarProps = {
	isOpen: boolean,
	setIsOpen: (isOpen: boolean) => void,
	selectedBrands: string[],
	setSelectedBrands: (brands: string[]) => void,
	selectedColors: string,
	setSelectedColors: (colors: string) => void,
	selectedPrices: string[],
	setSelectedPrices: (prices: string[]) => void,
}

const Brands = ["Nike", "Adidas", "Puma", "Skybags", "Vans"];
const Colors = ["gray", "blue", "red", "pink", "yellow", "green"];
const Prices = ["$100 - $500", "$500 - $1000", "$1000 - $1500", "$1500 - $2000", "$2000+"];


export default function SideBar({
	isOpen, setIsOpen,
	selectedBrands, setSelectedBrands,
	selectedColors, setSelectedColors,
	selectedPrices, setSelectedPrices }: sidebarProps){
		
	const [isBrandOpen, setIsBrandOpen] = useState(true);
	const [isColorOpen, setIsColorOpen] = useState(true);
	const [isPriceOpen, setIsPriceOpen] = useState(true);

	const toggleBrand = (brand: string) => {
		setSelectedBrands(
			selectedBrands.includes(brand) ? selectedBrands.filter(b => b !== brand) : [...selectedBrands, brand]
		)
	}

	const togglePrice = (price: string) => {
		setSelectedPrices(
			selectedPrices.includes(price) ? selectedPrices.filter(p => p !== price) : [...selectedPrices, price]
		)
	}

	// Helper to render checkbox list
	const renderCheckboxList = (items: string[], selected: string[], toggleFn: (v: string) => void) => (
		<ul className="list-none space-y-3 pl-3">
			{
				items.map((item) => (
					<li key={item}>
						<label className="flex items-center gap-2 cursor-pointer">
							<input
								type="checkbox"
								checked={selected.includes(item)}
								onChange={() => toggleFn(item)}
								className="w-4 h-4"
							/>
							<span>{item}</span>
						</label>
					</li>
				))
			}
		</ul>
	)
	

	return (
		<>
			{/* Desktop Sidebar */}
			<aside className={`hidden md:flex flex-col gap-3 w-[20%] ${bgColors[selectedColors]} p-3 rounded-md mb-6`}>
				{/* Brand */}
				<div className="bg-gray-50 rounded-lg p-3">
					<div 
						className="flex justify-between items-center cursor-pointer mb-2"
						onClick={() => setIsBrandOpen(!isBrandOpen)}
					>
						<h1 className="text-lg font-semibold">
							Brands
						</h1>
						<ChevronDown className={`${isBrandOpen ? "rotate-180" : ""} transition-all duration-300`} />
					</div>

					{
						isBrandOpen && renderCheckboxList(Brands, selectedBrands, toggleBrand)
					}
				</div>

				{/* Color */}
				<div className="bg-gray-50 rounded-lg p-3 pb-4">
					<div 
						className="flex justify-between items-center cursor-pointer mb-2"
						onClick={() => setIsColorOpen(!isColorOpen)}
					>
						<h1 className="text-lg font-semibold">
							Colors
						</h1>
						<ChevronDown className={`${isColorOpen ? "rotate-180" : ""} transition-all duration-300`} />
					</div>

					{
						isColorOpen && (
							<ul className="list-none flex flex-wrap gap-3 pl-2">
								{
									Colors.map((color) => (
										<li key={color}>
											<input
												type="radio"
												name="color"
												value={color}
												onClick={() => setSelectedColors(color)}
												className={`
													appearance-none w-6 h-6 rounded-full border-2 cursor-pointer
													${color === "pink" ? "bg-pink-500 border-pink-600" : ""}
													${color === "blue" ? "bg-blue-500 border-blue-600" : ""}
													${color === "red" ? "bg-red-500 border-red-600" : ""}
													${color === "yellow" ? "bg-yellow-400 border-yellow-500" : ""}
													${color === "green" ? "bg-green-500 border-green-600" : ""}
													${color === "gray" ? "bg-gray-300 border-gray-400" : ""}
													${selectedColors.includes(color) ? "ring-2 ring-offset-2 ring-blue-600" : ""}
												`}
												title={color}
											/>
										</li>
									))
								}
							</ul>
						)
					}
				</div>

				{/* Price range */}
				<div className="bg-gray-50 rounded-lg p-3">
					<div 
						className="flex justify-between items-center cursor-pointer mb-2"
						onClick={() => setIsPriceOpen(!isPriceOpen)}
					>
						<h1 className="text-lg font-semibold">
							Price Range
						</h1>
						<ChevronDown className={`${isPriceOpen ? "rotate-180" : ""} transition-all duration-300`} />
					</div>

					{
						isPriceOpen && renderCheckboxList(Prices, selectedPrices, togglePrice)
					}
				</div>

				<p className="text-lg font-semibold bg-gray-50 rounded-lg p-3 text-center">
					More
				</p>
			</aside>

			{/* Mobile Sidebar */}
			{
				isOpen && (
					<div className="fixed inset-0 z-50 bg-black/40 flex">
						<aside className="bg-white w-[65%] max-w-xs h-full p-4 flex flex-col gap-3 overflow-y-auto">
							<div className="flex justify-between items-center">
								<p className="text-base font-semibold">
									Apply Filters
								</p>

								<button
									onClick={() => setIsOpen(false)}
									className="self-end text-gray-600 mb-2 bg-gray-100 p-[6px] rounded-lg"
								>
									<X />
								</button>
							</div>

							{/* Brands */}
							<div className="bg-gray-100 rounded-lg p-3">
								<div 
									className="flex justify-between items-center cursor-pointer"
									onClick={() => setIsBrandOpen(!isBrandOpen)}
								>
									<h1 className="text-base font-semibold">
										Brands
									</h1>
									<ChevronDown className={`${isBrandOpen ? "rotate-180" : ""} transition-all duration-300`} />
								</div>

								{
									isBrandOpen && renderCheckboxList(Brands, selectedBrands, toggleBrand)
								}
							</div>

							{/* Color */}
							<div className="bg-gray-100 rounded-lg p-3 pb-4">
								<div 
									className="flex justify-between items-center cursor-pointer"
									onClick={() => setIsColorOpen(!isColorOpen)}
								>
									<h1 className="text-base font-semibold">
										Colors
									</h1>
									<ChevronDown className={`${isColorOpen ? "rotate-180" : ""} transition-all duration-300`} />
								</div>

								{
									isColorOpen && (
										<ul className="list-none flex flex-wrap gap-3 pl-2">
											{
												Colors.map((color) => (
													<li key={color}>
														<input
															type="radio"
															name="color"
															value={color}
															onClick={() => setSelectedColors(color)}
															className={`
																appearance-none w-6 h-6 rounded-full border-2 cursor-pointer
																${color === "pink" ? "bg-pink-500 border-pink-600" : ""}
																${color === "blue" ? "bg-blue-500 border-blue-600" : ""}
																${color === "red" ? "bg-red-500 border-red-600" : ""}
																${color === "yellow" ? "bg-yellow-400 border-yellow-500" : ""}
																${color === "green" ? "bg-green-500 border-green-600" : ""}
																${color === "gray" ? "bg-gray-300 border-gray-400" : ""}
																${selectedColors.includes(color) ? "ring-2 ring-offset-2 ring-blue-600" : ""}
															`}
															title={color}
														/>
													</li>
												))
											}
										</ul>
									)
								}
							</div>

							{/* Price range */}
							<div className="bg-gray-100 rounded-lg p-3">
								<div 
									className="flex justify-between items-center cursor-pointer"
									onClick={() => setIsPriceOpen(!isPriceOpen)}
								>
									<h1 className="text-base font-semibold">
										Price Range
									</h1>
									<ChevronDown className={`${isPriceOpen ? "rotate-180" : ""} transition-all duration-300`} />
								</div>

								{
									isPriceOpen && renderCheckboxList(Prices, selectedPrices, togglePrice)
								}
							</div>

							<p className="text-lg font-semibold bg-gray-100 rounded-lg p-2 text-center">
								More
							</p>
						</aside>
						
						{/* Closing sidebar by clicking outside */}
						<div
							className="flex-1"
							onClick={() => setIsOpen(false)}
						></div>
					</div>
				)
			}
		</>
	)
}