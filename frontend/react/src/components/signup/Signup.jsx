import {useAuth} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {Flex, Heading, Image, Link, Stack, Text} from "@chakra-ui/react";
import CreateCustomerForm from "../shared/CreateCustomerForm.jsx";

const Signup = () => {
    const { customer, setCustomerFromToken } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (customer) {
            navigate("/dashboard/customers");
        }
    })

    return (
        <Stack
            minH={'100vh'}
            direction={{base: 'column', md: 'row'}}
            backgroundImage={"url('public/SignWall.jpg')"}
            backgroundSize="cover"
            backgroundPosition="center"
        >
            <Flex
                p={8}
                flex={1}
                alignItems={'center'}
                justifyContent={'center'}>
                <Stack
                    spacing={4}
                    w={'full'}
                    maxW={'md'}
                    padding={'30px'}
                    borderRadius={'5%'}
                    borderWidth={'3px'}
                    boxShadow={'0px 0px 50px black'}
                    minW={'600px'}
                    backdropFilter={'blur(10px)'}
                    >
                    <Image
                        src={"https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png"}
                        boxSize={"180px"}
                        alt={"React Logo"}
                        alignSelf={"center"}
                    />
                    <Heading
                        fontSize={'2xl'}
                        mb={15}
                        alignSelf={"center"}
                    >Register for an account</Heading>

                    <CreateCustomerForm onSuccess={(token) => {
                        localStorage.setItem("access_token", token)
                        setCustomerFromToken()
                        navigate("/dashboard");
                    }}/>
                    <Link color={"blue.500"} href={"/"}>
                        Have an account? Login now.
                    </Link>
                </Stack>
            </Flex>
        </Stack>
    );
}

export default Signup;