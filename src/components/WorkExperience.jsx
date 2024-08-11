
const WorkExperience = () => {
    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Work Experience</h1>
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold mb-4">Job Title</h2>
                    <p className="text-lg text-gray-700 mb-4">Company Name</p>
                    <p className="text-lg text-gray-700 mb-4">Duration</p>
                    <p className="text-lg text-gray-600">
                        Description of responsibilities and achievements. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel dolor feugiat, gravida libero eu, pretium ligula. Nulla facilisi. Aenean imperdiet vestibulum ligula sit amet tristique.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img 
                        src="https://via.placeholder.com/500" 
                        alt="Work Experience" 
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
            {/* Add more work experiences here */}
        </div>
    );
}

export default WorkExperience;
