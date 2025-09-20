"use client"

import { Star } from "lucide-react";
import { bgColors } from "@/helpers/colorSelector";


export type productTypes = {
	id: number,
    title: string,
    price: number,
    discountPrice: number,
    discountPercentage: number,
    starRating: number,
    imageUrl: string,
    brand: string,
    category: string,
    isHot: boolean,
}

type productProps = {
	product: productTypes,
	selectedColors: string
}

const starNumber = Array.from({ length: 5 });

export default function ItemCard({ product, selectedColors }: productProps) {
	const {
		title,
        price,
        discountPrice,
        discountPercentage,
        starRating,
        imageUrl,
        brand,
        category,
        isHot

	} = product

	return (
		<div className="flex flex-col bg-white rounded-xl shadow-md p-3">
			{/* Image */}
			<div className={`relative w-full h-48 flex justify-center items-center ${bgColors[selectedColors]} rounded-lg`}>
				<img
					src={imageUrl}
					alt={title}
					className="object-contain w-full h-full"
				/>
				{
					isHot && (
						<span className="absolute top-1 left-1 bg-red-500 text-white text-sm px-3 py-1 rounded-md">
							Hot
						</span>
					)
				}
			</div>

			<div className="mt-3 flex flex-col gap-2">
				{/* Title */}
				<h2 className="text-lg font-semibold">
					{title}
				</h2>

				{/* Brand and Category */}
				<p className="text-sm text-gray-500">
					{brand} | {category}
				</p>

				{/* Rating */}
				<div className="flex items-center gap-1">
					{
						starNumber.map((_, i) => (
							<Star
								key={i}
								className={`w-4 h-4 ${i < Math.round(starRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
							/>
						))
					}
					<span className="text-xs text-gray-500 ml-1">
						({starRating})
					</span>
				</div>

				{/* Price */}
				<div className="flex items-center gap-2">
					<span className="text-lg font-bold text-green-600">
						${discountPrice}
					</span>
					<span className="line-through text-gray-400">
						${price}
					</span>
					<span className="text-sm text-red-500">
						-{discountPercentage}%
					</span>
				</div>

				{/* Button */}
				<button className="mt-2 bg-blue-600 text-white py-1.5 rounded-lg hover:bg-blue-700 transition">
					Add to Cart
				</button>
			</div>
		</div>
	)
}
