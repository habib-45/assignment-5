import banner from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <section className="container mx-auto pt-25 bg-white">
            <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12'>

                <div className="w-full md:w-1/2 text-center md:text-left">

                    <h1 className="text-5xl sm:text-5 font-bold text-black">
                        Build Your Ideal <br />
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack</span>
                    </h1>

                    <p className="mt-9 max-w-2xl text-gray-600 font-semibold">
                        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                    </p>

                    <div className="mt-8 flex  items-center justify-center md:justify-start gap-4">
                        <button className="w-full sm:w-auto bg-gradient-to-r from-[#ff5e3a] to-[#f03f86] text-white font-semibold text-base px-6 py-2 rounded-xl">
                            Explore Technologies
                        </button>

                        <button className="w-full sm:w-auto border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold text-base px-6 py-2 rounded-xl">
                            Learn More
                        </button>
                    </div>
                </div>


                {/* <div className='flex items-center'>
                    <img src={banner} alt="" />
                </div> */}
                <div className="flex items-center justify-center w-full md:w-auto">
                    <img
                        src={banner}
                        alt="Development Stack"
                       className="w-full max-w-[380px] sm:max-w-[480px] lg:max-w-[550px] h-auto object-contain"
                    />
                </div>


            </div>
        </section>
    );
};

export default Banner;