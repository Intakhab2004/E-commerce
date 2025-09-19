"use client"

import Heropage from "@/components/Hero";
import NavBar from "@/components/NavBar"
import { useState } from "react";


export default function HomePage(){
	const [category, setCategory] = useState<string>("home");


	return (
		<div>
			<NavBar 
				category={category} 
				setCategory={setCategory}
			/>
			<Heropage />
		</div>
	)
}