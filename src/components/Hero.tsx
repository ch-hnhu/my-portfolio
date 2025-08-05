import React from "react";
import { ArrowRight, Code, Palette, Gamepad2 } from "lucide-react";
import headshotImage from "../assets/image/headshot.png";

const Hero = () => {
	return (
		<section
			id='home'
			className='min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 pt-16 sm:pt-20'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center'>
					{/* Content */}
					<div className='space-y-6 md:space-y-8 order-2 lg:order-1'>
						<div className='space-y-4 md:space-y-6 py-2 md:py-4'>
							<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight md:leading-relaxed text-center lg:text-left'>
								Hi, I'm{" "}
								<span className='bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent inline-block py-1'>
									Chung Hue Nhu
								</span>
							</h1>
							<p className='text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium text-center lg:text-left'>
								Fullstack Web Developer from Vietnam
							</p>
							<p className='text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left'>
								Building digital experiences that blend logic and creativity
							</p>
						</div>

						<div className='flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start'>
							<div className='flex items-center space-x-2 bg-white dark:bg-gray-800 px-3 md:px-4 py-2 rounded-full shadow-md'>
								<Code className='h-4 w-4 md:h-5 md:w-5 text-emerald-600' />
								<span className='text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300'>
									Coding
								</span>
							</div>
							<div className='flex items-center space-x-2 bg-white dark:bg-gray-800 px-3 md:px-4 py-2 rounded-full shadow-md'>
								<Palette className='h-4 w-4 md:h-5 md:w-5 text-orange-500' />
								<span className='text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300'>
									Design
								</span>
							</div>
							<div className='flex items-center space-x-2 bg-white dark:bg-gray-800 px-3 md:px-4 py-2 rounded-full shadow-md'>
								<Gamepad2 className='h-4 w-4 md:h-5 md:w-5 text-purple-500' />
								<span className='text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300'>
									Gaming
								</span>
							</div>
						</div>

						<div className='flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start'>
							<a
								href='#contact'
								className='inline-flex items-center justify-center px-6 md:px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base'>
								Let's Connect
								<ArrowRight className='ml-2 h-4 w-4 md:h-5 md:w-5' />
							</a>
							<a
								href='#projects'
								className='inline-flex items-center justify-center px-6 md:px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 text-sm md:text-base'>
								View My Work
							</a>
						</div>
					</div>

					{/* Profile Image Placeholder */}
					<div className='flex justify-center lg:justify-end'>
						<div className='relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem]'>
							{/* Abstract Background Blob Shapes */}
							<div
								className='absolute top-8 left-4 w-64 h-48 sm:w-72 sm:h-56 md:w-80 md:h-64 lg:w-96 lg:h-72 bg-gradient-to-br from-orange-300 via-orange-400 to-yellow-400 rounded-full opacity-90 z-0'
								style={{
									borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
									transform: "rotate(-10deg)",
								}}></div>

							{/* Secondary Abstract Shape */}
							<div
								className='absolute bottom-12 right-8 w-48 h-40 sm:w-56 sm:h-48 md:w-64 md:h-56 lg:w-72 lg:h-64 bg-gradient-to-tr from-emerald-300 via-teal-400 to-cyan-400 rounded-full opacity-80 z-0'
								style={{
									borderRadius: "40% 60% 70% 30% / 40% 70% 30% 60%",
									transform: "rotate(15deg)",
								}}></div>

							{/* Small Decorative Blob */}
							<div
								className='absolute top-4 right-12 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full opacity-70 z-0'
								style={{
									borderRadius: "70% 30% 60% 40% / 50% 70% 30% 50%",
									transform: "rotate(45deg)",
								}}></div>

							{/* Main Headshot - Positioned to overlap and break out */}
							<div className='absolute top-12 left-12 sm:top-16 sm:left-16 md:top-20 md:left-20 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-88 lg:h-88 rounded-full overflow-hidden shadow-2xl z-10 border-4 border-white/50 backdrop-blur-sm'>
								<img
									src={headshotImage}
									alt='Chung Hue Nhu'
									className='w-full h-full object-cover'
								/>
							</div>

							{/* Floating Labels with gradient backgrounds */}
							<div className='absolute top-6 right-4 sm:top-8 sm:right-6 bg-gradient-to-r from-orange-400 to-yellow-500 text-white px-4 py-2 rounded-full shadow-lg z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-300'>
								<span className='text-sm sm:text-base font-semibold'>
									Frontend Developer
								</span>
							</div>

							<div className='absolute bottom-8 left-2 sm:bottom-12 sm:left-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full shadow-lg z-20 transform rotate-2 hover:rotate-0 transition-transform duration-300'>
								<span className='text-sm sm:text-base font-semibold'>
									Backend Developer
								</span>
							</div>

							{/* Circular Badge with Icon */}
							<div className='absolute top-20 right-2 sm:top-24 sm:right-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-lg z-20 border-2 border-white/30'>
								<Code className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white' />
							</div>

							{/* Small Floating Elements */}
							<div className='absolute bottom-20 right-12 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-bounce z-15 opacity-80'>
								<div className='w-full h-full rounded-full flex items-center justify-center'>
									<Palette className='h-4 w-4 sm:h-5 sm:w-5 text-white' />
								</div>
							</div>

							{/* Additional small decorative dots */}
							<div className='absolute top-32 left-4 w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full animate-pulse z-5'></div>
							<div className='absolute bottom-24 right-20 w-2 h-2 sm:w-3 sm:h-3 bg-teal-400 rounded-full animate-ping z-5'></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
