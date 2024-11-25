const Navbar = () => {
    return (
        <header className="flex justify-between items-center py-4 px-8 bg-black text-white">
            <div className="text-xl font-bold">RedTilt</div>
            <nav className="hidden md:flex space-x-6">
                <a href="#" className="hover:text-red-500">Services</a>
                <a href="#" className="hover:text-red-500">Reviews</a>
                <a href="#" className="hover:text-red-500">Blog</a>
                <a href="#" className="hover:text-red-500">Jobs</a>
            </nav>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                Start a project
            </button>
        </header>
    );
};
export default Navbar;
