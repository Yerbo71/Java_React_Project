import { Flex, Icon, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <Flex
            mx="auto"
            mt="7rem"
            borderTop="1px"
            borderColor={useColorModeValue('gray.400', 'gray.500')}
            flexDir={['column-reverse', 'row']}
            color={useColorModeValue('gray.600', 'gray.300')}
        >
            <VStack
                spacing="2rem"
                alignItems="start"
                p="3rem"
                pt={['0', '3rem']}
                w={['100%', '50%']}
            >
                <a
                    href="www.linkedin.com/in/yerbolat-zhunisov-403595272"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn <Icon ml="1px" mb="2px" as={FaLinkedin} />
                </a>
                <a href="https://github.com/Yerbo71" target="_blank" rel="noreferrer">
                    Github
                    <Icon ml="3px" mb="2px" as={AiOutlineGithub} />{' '}
                </a>

                <Text>Email: erbolat.j.2004  @gmail.com</Text>
            </VStack>
            <VStack
                spacing="1rem"
                w={['100%', '50%']}
                alignItems="start"
                justifyContent="center"
                p="3rem"
                pb={['2rem', '3rem']}
            >
            </VStack>
        </Flex>
    );
};

export default Footer;
