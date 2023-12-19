import { EmailIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    Textarea,
    useColorModeValue,
} from '@chakra-ui/react';

import { IoIosContact } from 'react-icons/io';
const Contact = () => {
    return (
        <Box mt="4rem">
            <Heading>Contact me</Heading>
            <Text mx="0.2rem">Let's start building something together</Text>
            <Box width={['90%', '65%']} mt="2rem" ml="1rem" >
                <form
                    action="https://formsubmit.co/el/fumexu"/*my gmail*/
                    method="POST"
                >
                    <InputGroup my="1rem" >
                        <InputLeftElement
                            pointerEvents="none"
                            children={
                                <Icon
                                    as={IoIosContact}
                                    color={useColorModeValue('gray.800', 'white')}
                                />
                            }
                        />
                        <Input
                            variant="filled"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            w="100%"
                            isRequired
                            bg={'lightgrey'}


                        />
                    </InputGroup>
                    <InputGroup >
                        <InputLeftElement pointerEvents="none" children={<EmailIcon />} />
                        <Input
                            variant="filled"
                            type="email"
                            name="email"
                            placeholder="Email"
                            isRequired
                            w="100%"
                            bg={'lightgrey'}
                        />
                    </InputGroup>
                    <Textarea
                        name="message"
                        variant="filled"
                        w="100%"
                        h="7rem"
                        mt="1rem"
                        placeholder="Message"
                        bg={'lightgrey'}
                    />
                    <br />
                    <Button mt="1rem" type="submit" bg={'lightgrey'} _hover={{
                        bg: 'blue.400',
                        color: 'white',
                    }}
                            border={'solid 2px black'} borderRadius={'7px'}>
                        Send
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default Contact;
