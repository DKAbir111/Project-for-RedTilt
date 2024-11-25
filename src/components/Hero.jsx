const Hero = () => {
    return (
        <section className="bg-black text-white py-20 px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold">
                    From Concept to Code <br />
                    <span className="text-red-500">We Make IT Happen</span>
                </h1>
                <p className="mt-6 text-lg">
                    We help brands and B2B enterprises build amazing websites that convert their visitors
                    to paying customers.
                </p>
                <button className="mt-8 bg-red-600 px-6 py-3 text-white rounded-full shadow-lg hover:bg-red-700 hover:shadow-red-500 transition duration-300">
                    Let’s have a call
                </button>
            </div>
            {/* Add Circular Icons with Tailwind */}
            <div className="flex justify-center mt-12">
                <div className="relative w-24 h-24 rounded-full bg-red-500 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-2 border-dotted border-gray-700 animate-spin-slow"></div>
                    <span className="text-xl">👥</span>
                </div>
            </div>
        </section>
    );
};
export default Hero;
