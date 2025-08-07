import React from "react";
import { Download, GraduationCap, Award, Calendar } from "lucide-react";

const Resume = () => {
	return (
		<section id='resume' className='py-20 bg-white dark:bg-gray-900'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
						Education & Experience
					</h2>
					<p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
						My academic journey and professional development
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					{/* Education */}
					<div className='space-y-8'>
						<div className='flex items-center space-x-4 mb-8'>
							<div className='w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center'>
								<GraduationCap className='h-6 w-6 text-emerald-600 dark:text-emerald-400' />
							</div>
							<h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
								Education
							</h3>
						</div>

						<div className='bg-gray-50 dark:bg-gray-800 rounded-2xl p-6'>
							<div className='flex items-start space-x-4'>
								<div className='w-3 h-3 bg-emerald-500 rounded-full mt-2'></div>
								<div className='flex-1'>
									<h4 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
										Cao Thang Technical College
									</h4>
									<p className='text-emerald-600 dark:text-emerald-400 font-medium mb-2'>
										Major: Web Development
									</p>
									<div className='flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-3'>
										<Calendar className='h-4 w-4' />
										<span>3rd Year Student • Expected Graduation: 2026</span>
									</div>
									<p className='text-gray-700 dark:text-gray-300'>
										Specializing in fullstack web development with focus on
										modern technologies and practical application development.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Experience */}
					<div className='space-y-8'>
						<div className='flex items-center space-x-4 mb-8'>
							<div className='w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center'>
								<Award className='h-6 w-6 text-orange-600 dark:text-orange-400' />
							</div>
							<h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
								Experience
							</h3>
						</div>

						<div className='bg-gray-50 dark:bg-gray-800 rounded-2xl p-6'>
							<div className='flex items-start space-x-4'>
								<div className='w-3 h-3 bg-orange-500 rounded-full mt-2'></div>
								<div className='flex-1'>
									<h4 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
										Academic & Personal Projects
									</h4>
									<p className='text-orange-600 dark:text-orange-400 font-medium mb-2'>
										Self-Directed Learning
									</p>
									<div className='flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-3'>
										<Calendar className='h-4 w-4' />
										<span>2022 - Present</span>
									</div>
									<p className='text-gray-700 dark:text-gray-300 mb-4'>
										Currently building skills through academic coursework and
										personal projects, focusing on fullstack development and
										creative problem-solving.
									</p>
									<div className='space-y-2'>
										<div className='flex items-center space-x-2'>
											<div className='w-2 h-2 bg-emerald-500 rounded-full'></div>
											<span className='text-sm text-gray-600 dark:text-gray-300'>
												Developed news management system with Node.js and
												MySQL
											</span>
										</div>
										<div className='flex items-center space-x-2'>
											<div className='w-2 h-2 bg-emerald-500 rounded-full'></div>
											<span className='text-sm text-gray-600 dark:text-gray-300'>
												Created responsive web applications using React
											</span>
										</div>
										<div className='flex items-center space-x-2'>
											<div className='w-2 h-2 bg-emerald-500 rounded-full'></div>
											<span className='text-sm text-gray-600 dark:text-gray-300'>
												Explored graphic design and game development
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Skills Summary */}
						<div className='bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800'>
							<h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
								Ready for Growth
							</h4>
							<p className='text-gray-700 dark:text-gray-300'>
								Eager to apply my academic knowledge and personal project experience
								in a professional environment. Open to internships, entry-level
								positions, and collaborative projects that will help me grow as a
								developer.
							</p>
						</div>
					</div>
				</div>

				{/* Download Resume CTA */}
				<div className='text-center mt-16'>
					<button className='inline-flex items-center px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg'>
						<Download className='mr-2 h-5 w-5' />
						Download Resume
					</button>
					<p className='text-sm text-gray-500 dark:text-gray-400 mt-2'>
						PDF format • Updated December 2025
					</p>
				</div>
			</div>
		</section>
	);
};

export default Resume;
