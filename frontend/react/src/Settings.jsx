import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import SidebarWithHeader from "./components/shared/SideBar.jsx";

const Settings = () => {
    return (
        <SidebarWithHeader>
            <Box ml={{ base: 0, md: 60 }} p="4">
                <Heading mb="4" textAlign={'center'}>Settings</Heading>
                <VStack spacing="4">
                    <Box>
                        <Text fontSize="lg">General Settings</Text>
                        {/* Will be added*/}
                    </Box>
                    <Box>
                        <Text fontSize="lg">Appearance</Text>
                        {/* Will be added*/}
                    </Box>
                    <Box>
                        <Text fontSize="lg">Account</Text>
                        {/* Will be added*/}
                    </Box>
                </VStack>
            </Box>
        </SidebarWithHeader>
    );
};

export default Settings;
