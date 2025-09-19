"use client"

import { X } from "lucide-react";

type sidebarProps = {
	isOpen: boolean,
	setIsOpen: (isOpen: boolean) => void
}

const Brands = ["Nike", "Adidas", "Puma", "Skybags", "Vans"];
const Colors = ["blue", "red", "black", "yellow", "green"];
const Prices = ["$0 - $50", "$50 - $100", "$100 - $200", "$200 - $500", "$500+"];


export default function SideBar({isOpen, setIsOpen}: sidebarProps){
	

	return (
		<>
			{/* Desktop Sidebar */}
			<aside className="hidden md:flex flex-col w-[20%] gap-3">
				{/* Brand */}
				<div className="bg-gray-100 rounded-lg p-3">
					<h1 className="text-lg font-semibold mb-2">
						Brands
					</h1>

					<ul className="list-none space-y-3 pl-3">
						{
							Brands.map((brand) => (
								<li key={brand}>
									<label className="flex items-center gap-2 cursor-pointer">
										<input type="checkbox" className="w-4 h-4" />
										<span>{brand}</span>
									</label>
								</li>
							))
						}
					</ul>
				</div>

				{/* Color */}
				<div className="bg-gray-100 rounded-lg p-3 pb-4">
					<h1 className="text-lg font-semibold mb-3">
						Colors
					</h1>

					<ul className="list-none flex flex-wrap gap-3 pl-2">
						{
							Colors.map((color) => (
								<li key={color}>
									<button
										className={`
											w-5 h-5 rounded-full border-2
											${color === "black" ? "bg-black border-gray-400" : ""}
											${color === "blue" ? "bg-blue-500 border-blue-600" : ""}
											${color === "red" ? "bg-red-500 border-red-600" : ""}
											${color === "yellow" ? "bg-yellow-400 border-yellow-500" : ""}
											${color === "green" ? "bg-green-500 border-green-600" : ""}
										`}
										title={color}
									></button>
								</li>
							))
						}
					</ul>
				</div>

				{/* Price range */}
				<div className="bg-gray-100 rounded-lg p-3">
					<h1 className="text-lg font-semibold mb-1">
						Price range
					</h1>

					<ul className="list-none space-y-3 pl-2">
						{
							Prices.map(
							(range) => (
								<li key={range}>
									<label className="flex items-center gap-2 cursor-pointer">
										<input type="checkbox" className="w-4 h-4" />
										<span>{range}</span>
									</label>
								</li>
							))
						}
					</ul>
				</div>

				<p className="text-lg font-semibold bg-gray-100 rounded-lg p-3 text-center">
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
								<h1 className="text-lg font-semibold mb-2">
									Brands
								</h1>

								<ul className="list-none space-y-3 pl-3">
									{
										Brands.map((brand) => (
											<li key={brand}>
												<label className="flex items-center gap-2 cursor-pointer">
													<input type="checkbox" className="w-4 h-4" />
													<span>{brand}</span>
												</label>
											</li>
										))
									}
								</ul>
							</div>

							{/* Color */}
							<div className="bg-gray-100 rounded-lg p-3 pb-4">
								<h1 className="text-lg font-semibold mb-3">
									Colors
								</h1>

								<ul className="list-none flex flex-wrap gap-3 pl-2">
									{
										Colors.map((color) => (
											<li key={color}>
												<button
													className={`
														w-5 h-5 rounded-full border-2
														${color === "black" ? "bg-black border-gray-400" : ""}
														${color === "blue" ? "bg-blue-500 border-blue-600" : ""}
														${color === "red" ? "bg-red-500 border-red-600" : ""}
														${color === "yellow" ? "bg-yellow-400 border-yellow-500" : ""}
														${color === "green" ? "bg-green-500 border-green-600" : ""}
													`}
													title={color}
												></button>
											</li>
										))
									}
								</ul>
							</div>

							{/* Price range */}
							<div className="bg-gray-100 rounded-lg p-3">
								<h1 className="text-lg font-semibold mb-1">
									Price range
								</h1>

								<ul className="list-none space-y-3 pl-2">
									{
										Prices.map(
										(range) => (
											<li key={range}>
												<label className="flex items-center gap-2 cursor-pointer">
													<input type="checkbox" className="w-4 h-4" />
													<span>{range}</span>
												</label>
											</li>
										))
									}
								</ul>
							</div>

							<p className="text-lg font-semibold bg-gray-100 rounded-lg p-3 text-center">
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