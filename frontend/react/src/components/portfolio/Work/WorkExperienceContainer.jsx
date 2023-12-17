import { Box } from '@chakra-ui/layout';
import WorkExperience from './WorkExperience';
import workJson from './workJson.jsx';
const WorkExperienceContainer = () => {
    return (
        <Box ml={['0.5rem', '1.5rem', '1.5rem', '1.5rem']} mt="1rem" pt="2rem">
            {workJson.map((workExperience, index) => {
                return <WorkExperience key={index} workExperience={workExperience} />;
            })}
        </Box>
    );
};

export default WorkExperienceContainer;