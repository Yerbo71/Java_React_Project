import React, {useState} from 'react';
import {
    Avatar,
    AvatarBadge,
    Box,
    CloseButton,
    Drawer,
    DrawerContent,
    Flex,
    HStack,
    Icon,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useColorModeValue,
    useDisclosure,
    VStack,
    Image,
    Badge
} from '@chakra-ui/react';

import {
    FiBell, FiBook,
    FiChevronDown,
    FiHome,
    FiMenu,
    FiSettings,
    FiUsers,
    FiTrash
} from 'react-icons/fi';
import { MdRestaurantMenu } from "react-icons/md";
import {useAuth} from "../context/AuthContext.jsx";
import {customerProfilePictureUrl} from "../../services/client.js";
const LinkItems = [
    {name: 'Home', route: '/dashboard', icon: FiHome},
    {name: 'Recipes', route: '/dashboard/recipes', icon: MdRestaurantMenu},
    {name: 'Notes', route: '/dashboard/notes', icon: FiBook},
    {name: 'Administration', route: '/dashboard/customers',  icon: FiUsers},
    {name: 'Settings', route: '/dashboard/settings', icon: FiSettings},
];

export default function SidebarWithHeader({ children }) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{base: 'none', md: 'block'}}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} />
            <Box ml={{base: 0, md: 60}} p="4">
                {children}
            </Box>
        </Box>
    );
}

const SidebarContent = ({onClose, ...rest}) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{base: 'full', md: 60}}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" flexDirection="column" alignItems="center" mx="8" mb={75} mt={2} justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" mb={5}>
                    React
                </Text>
                <Image
                    boxSize='75px'
                    src='https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png'
                    alt='React'
                />
                <CloseButton display={{base: 'flex', md: 'none'}} onClick={onClose}/>
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} route={link.route} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

const NavItem = ({icon, route, children, ...rest}) => {
    return (
        <Link href={route} style={{textDecoration: 'none'}} _focus={{boxShadow: 'none'}}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'blue.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

const MobileNav = ({ onOpen, customerId, ...rest}) => {
    const { logOut, customer} = useAuth();
    const [isProfileModalOpen, setProfileModalOpen] = useState(false);
    const {
        isOpen: isNotificationsModalOpen,
        onOpen: onNotificationsModalOpen,
        onClose: onNotificationsModalClose,
    } = useDisclosure();
    const [notifications, setNotifications] = useState([
        'Developers are trying to improve the app every day',
        'You have successfully logged into the application!!!',
        // ... (more notifications)
    ]);

    const handleProfileClick = () => {
        setProfileModalOpen(true);
    };

    const handleCloseProfileModal = () => {
        setProfileModalOpen(false);
    };
    const handleNotificationsClick = () => {
        onNotificationsModalOpen();
    };

    const handleCloseNotificationsModal = () => {
        onNotificationsModalClose();
    };

    const handleDeleteNotification = (index) => {
        const updatedNotifications = [...notifications];
        updatedNotifications.splice(index, 1);
        setNotifications(updatedNotifications);
    };


    return (
        <Flex
            ml={{base: 0, md: 60}}
            px={{base: 4, md: 4}}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{base: 'space-between', md: 'flex-end'}}
            {...rest}>
            <IconButton
                display={{base: 'flex', md: 'none'}}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu/>}
            />

            <Text
                display={{base: 'flex', md: 'none'}}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold">
                React
            </Text>

            <HStack spacing={{base: '0', md: '6'}}>
                <HStack spacing="2">
                    <IconButton
                        size="lg"
                        variant="ghost"
                        aria-label="open notifications"
                        icon={<FiBell />}
                        onClick={handleNotificationsClick}
                    />
                    <Badge size="sm" onClick={handleNotificationsClick} colorScheme={'red'}>
                        {notifications.length}
                    </Badge>
                </HStack>
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: 'none' }}
                        >
                            <HStack>
                                <Avatar size="sm" src={customerProfilePictureUrl(customerId)} />
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2"
                                >
                                    <Text fontSize="sm">{customer?.username}</Text>
                                    {customer?.roles.map((role, id) => (
                                        <Text key={id} fontSize="xs" color="gray.600">
                                            {role}
                                        </Text>
                                    )
                                    )}
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>

                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}>
                            <MenuItem
                                onClick={handleProfileClick}
                                aria-label="open profile modal"
                                _hover={{
                                bg: 'blue.400',
                                color: 'white',
                            }}>Profile
                            </MenuItem>
                            <MenuDivider/>
                            <MenuItem onClick={logOut}
                                      _hover={{
                                            bg: 'red.400',
                                            color: 'white',
                                                }}>
                                Sign out
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
            {/* Profile Modal */}
            <Modal isOpen={isProfileModalOpen} onClose={handleCloseProfileModal} size="md">
                <ModalOverlay />
                <ModalContent textAlign={'center'}>
                    <ModalHeader>Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* Customize the profile  */}
                        <VStack spacing="4" align="stretch">
                            <Avatar size="xl" src={customerProfilePictureUrl(customerId)} alignSelf={'center'} >
                                <AvatarBadge boxSize='1em' bg='green.500' />
                            </Avatar>
                            <Text fontSize="lg" fontWeight="bold">
                                {customer?.username}
                            </Text>
                            {/* Add more profile information */}
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>


            <Modal isOpen={isNotificationsModalOpen} onClose={handleCloseNotificationsModal} size="md">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign={'center'}>Notifications</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* Display the number of notifications */}
                        <Text mb="4" fontSize="lg" fontWeight="bold">
                            {notifications.length} Notifications
                        </Text>

                        {/* Display notifications and allow deletion */}
                        <VStack spacing="4" align="stretch">
                            {notifications.map((notification, index) => (
                                <Flex key={index} justifyContent="space-between" alignItems="center">
                                    <Text fontSize="lg">{notification}</Text>
                                    <IconButton
                                        size="sm"
                                        variant="ghost"
                                        aria-label="delete notification"
                                        icon={<FiTrash />}
                                        onClick={() => handleDeleteNotification(index)}
                                        _hover={{
                                            bg: 'red.400',
                                            color: 'white',
                                        }}
                                    />
                                </Flex>
                            ))}
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </Flex>
    );
};