import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        title: 'Project One',
        description: 'Short description of project one.',
        imageUrl: 'https://via.placeholder.com/300'
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'Short description of project two.',
        imageUrl: 'https://via.placeholder.com/300'
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'Short description of project three.',
        imageUrl: 'https://via.placeholder.com/300'
    },
];

const Projects = () => {
    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-lg"/>
                        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        <Link to={`/project/${project.id}`} className="text-blue-500 hover:underline">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
