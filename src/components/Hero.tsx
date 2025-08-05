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
						<div className='relative'>
							<div className='w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-2xl'>
								<div className='w-88 h-88 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden'>
									<img
										src={headshotImage}
										alt='Chung Hue Nhu'
										className='w-full h-full object-cover rounded-full'
									/>
								</div>
							</div>
							<div className='absolute -top-6 -right-6 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center animate-bounce'>
								<Code className='h-10 w-10 text-white' />
							</div>
							<div className='absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center animate-pulse'>
								<Palette className='h-8 w-8 text-white' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
