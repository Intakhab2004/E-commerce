"use client"

import Heropage from "@/components/Hero";
import NavBar from "@/components/NavBar"
import { useState } from "react";
import { products } from "@/data/product";


export default function HomePage(){
	const [category, setCategory] = useState<string>("home");

	// Navbar filter
	const filteredProducts = products.filter(
		(product) => category === "home" || product.category.toLowerCase()+"s" === category
	)

	return (
		<div>
			<NavBar 
				category={category} 
				setCategory={setCategory}
			/>
			<Heropage filteredProducts={filteredProducts}/>
		</div>
	)
}