import banner from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <section className="container mx-auto pt-25 min-h-screen bg-white">
            <div className='flex justify-between items-center gap-[50px]'>
                <div className="p-10 pl-0 h-[400px] w-[650px]">
                    <h1 className="text-5xl text-[55px] font-bold text-black">
                        Build Your Ideal{" "}
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack</span>
                    </h1>

                    <p className="mt-9 max-w-2xl text-gray-600 font-semibold">
                        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                    </p>

                    <div className="mt-13 flex gap-2">
                        <button className="bg-gradient-to-r from-[#ff5e3a] to-[#f03f86] text-white font-semibold text-base px-2 py-1 rounded-xl">Explore Technologies</button>

                        <button className="btn py-2 px-1 rounded-xl text-base font-semibold w-40 h-12">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={banner} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;