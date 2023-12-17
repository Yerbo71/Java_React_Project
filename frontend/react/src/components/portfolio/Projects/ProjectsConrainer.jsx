import { Box } from '@chakra-ui/react';
import { projectss } from './projectss.jsx';
import Project from './Project';

const ProjectsContainer = ({ limit }) => {
    return (
        <Box>
            {projectss.map((project, index) => {
                if (index > limit) return null;
                return (
                    <Project
                        title={project.title}
                        snippet={project.snippet}
                        key={Math.random()}
                        detailPage={project.detailPage}
                        github={project.github}
                    />
                );
            })}
        </Box>
    );
};

export default ProjectsContainer;
