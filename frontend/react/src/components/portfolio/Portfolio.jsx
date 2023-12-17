import {
    Box,
    Button,
    Heading,
    ListItem,
    Text,
    UnorderedList,
    useColorModeValue,
} from '@chakra-ui/react';
import WorkExperienceContainer from "./Work/WorkExperienceContainer.jsx";
import ProjectsContainer from "./Projects/ProjectsConrainer.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";



const Dashboard = () => {
    return (
        <Box marginLeft={'4%'} marginBottom={'20%'}>
            <Heading mt="5rem" fontSize={['3xl', '4xl', '4xl', '5xl']}>
                Hi! I'm Yerbolat 👋
            </Heading>
            <Text
                mt="1rem"
                fontSize="lg"
                mb="2rem"
                color={useColorModeValue('gray.600', 'gray.300')}
            >
                I'm a student and web-developer based in Kazakhstan.
                <br /> I am a React.js enthusiast. I also like UX/UI Designing my own
                projects.
            </Text>
            <a href="#" target="_blank" rel="noreferrer">
                <Button bg={'lightgrey'} >My Resume 📗</Button>
            </a>
            <Heading mt="2rem" fontSize="4xl">
                Skills
            </Heading>
            <Box color={useColorModeValue('gray.700', 'gray.300')} ml="1rem">
                <Text fontSize="lg" fontWeight="bold" mt="1rem">
                    Web Development
                </Text>
                <UnorderedList ml="2.5rem" mt="0.5rem">
                    <ListItem>HTML</ListItem>
                    <ListItem>CSS</ListItem>
                    <ListItem>JavaScript</ListItem>
                    <ListItem>React</ListItem>
                    <ListItem>Chakra UI</ListItem>
                    <ListItem>Java,C++,Python,PostgreSQL and etc</ListItem>
                </UnorderedList>
                <Text fontSize="lg" fontWeight="bold" mt="1rem" marginTop={'2%'}>
                    UX/UI
                </Text>
                <UnorderedList ml="2.5rem" mt="0.5rem">
                    <ListItem>Figma</ListItem>
                    <ListItem>Canva</ListItem>
                </UnorderedList>
            </Box>
            <Heading mt="4rem" fontSize="4xl">
                Work Experience
            </Heading>
            <WorkExperienceContainer/>

            <Heading mt="3rem" fontSize="4xl">
                Projects
            </Heading>

            <ProjectsContainer />

            <Contact/>

            <Footer/>


        </Box>
    );
};

export default Dashboard;
