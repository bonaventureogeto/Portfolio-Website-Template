import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-xl font-bold">My Portfolio</Link>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
                        </svg>
                    </button>
                </div>
                <div className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"}`}>
                    <Link to="/work-experience" className="text-white block md:inline-block">Work Experience</Link>
                    <Link to="/projects" className="text-white block md:inline-block">Projects</Link>
                    <Link to="/about" className="text-white block md:inline-block">About</Link>
                    <Link to="/contact" className="text-white block md:inline-block">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
