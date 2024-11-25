import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Root() {
    return (
        <div className="bg-black text-white">
            <Navbar />
            <Hero />
        </div>
    )
}
