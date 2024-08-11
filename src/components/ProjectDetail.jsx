import { useParams } from 'react-router-dom';

const projectDetails = [
    {
        id: 1,
        title: 'Project One',
        description: 'Detailed description of project one. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel dolor feugiat, gravida libero eu, pretium ligula. Nulla facilisi. Aenean imperdiet vestibulum ligula sit amet tristique.',
        imageUrl: 'https://via.placeholder.com/500'
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'Detailed description of project two. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel dolor feugiat, gravida libero eu, pretium ligula. Nulla facilisi. Aenean imperdiet vestibulum ligula sit amet tristique.',
        imageUrl: 'https://via.placeholder.com/500'
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'Detailed description of project three. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel dolor feugiat, gravida libero eu, pretium ligula. Nulla facilisi. Aenean imperdiet vestibulum ligula sit amet tristique.',
        imageUrl: 'https://via.placeholder.com/500'
    },
];

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectDetails.find(p => p.id === parseInt(id));

    if (!project) {
        return <div className="container mx-auto p-6 bg-gray-100 min-h-screen">Project not found</div>;
    }

    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">{project.title}</h1>
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <p className="text-lg text-gray-700 mb-4">{project.description}</p>
                </div>
                <div className="md:w-1/2">
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
