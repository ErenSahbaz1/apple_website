import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Hero = () => {
	useGSAP(() => {
		gsap.to("#hero", {
			opacity: 1,
			delay: 1.5,
		});
	}, []);

	return (
		<section className="w-full nav-height bg-black relative">
			<div className="flex h-5/6 w-full flex-center flex-col">
				<p id="hero" className="hero-title">
					iPhone 15 pro
				</p>
			</div>
		</section>
	);
};

export default Hero;
