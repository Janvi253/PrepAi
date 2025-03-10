import React from 'react'

function Features() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-14 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-6 lg:max-w-3xl lg:mx-auto">
                        Developed from scratch for seamless online functionality
                    </h2>
                    <p className="text-base font-normal text-gray-500 lg:max-w-2xl lg:mx-auto mb-8">
                        Using technology to make finance simpler, smarter, and more rewarding.
                    </p>
                    <div className="flex flex-col justify-center md:flex-row gap-5 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
                        <button className="bg-indigo-600 py-3 px-6 rounded-full text-sm font-semibold text-white transition duration-500 hover:bg-indigo-700">
                            Get started
                        </button>
                        <button className="bg-indigo-50 py-3 px-6 rounded-full text-sm font-semibold text-indigo-600 transition duration-500 hover:bg-indigo-100">
                            Learn more
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="relative w-full h-auto">
                            <div className={`rounded-2xl p-5 xl:p-8 h-full ${index === 0 ? 'bg-gray-800' : index === 1 ? 'bg-indigo-500' : 'bg-violet-500'}`}>
                                <div className="block mb-5">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                                    {index === 0 ? 'Accomplish tasks swiftly with online tools.' : index === 1 ? 'Improved technology yields greater value' : 'Build wealth with insurance planning'}
                                </h3>
                                <p className="text-xs font-normal text-white mb-8">
                                    {index === 0 ? 'Get quoted and covered in under 10 minutes online. No paperwork or waiting.' : index === 1 ? 'We’ve eliminated old analog processes with state-of-the-art tech.' : 'Every life plan policy has a built-in wealth bonus, and we contribute too.'}
                                </p>
                                <button className="py-2 px-5 border border-gray-300 rounded-full text-xs text-white font-semibold flex items-center justify-between transition duration-500 hover:bg-white/5">
                                    View More
                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features