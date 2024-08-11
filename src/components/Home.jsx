const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center">
            <div className="container mx-auto p-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">Welcome to My Portfolio</h1>
                <p className="text-lg md:text-xl text-gray-600 mb-6">Showcasing my work, projects, and experience.</p>
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                    <a href="/work-experience" className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition duration-300">Work Experience</a>
                    <a href="/projects" className="bg-green-500 text-white px-6 py-3 rounded-md text-lg hover:bg-green-600 transition duration-300">Projects</a>
                    <a href="/about" className="bg-yellow-500 text-white px-6 py-3 rounded-md text-lg hover:bg-yellow-600 transition duration-300">About Me</a>
                    <a href="/contact" className="bg-red-500 text-white px-6 py-3 rounded-md text-lg hover:bg-red-600 transition duration-300">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Home;
