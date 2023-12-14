import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Flex,
    FormLabel,
    Heading,
    Image,
    Input,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react';/* Chakra ui for style*/
import {Formik, Form, useField} from "formik"; /*for form*/
import * as Yup from 'yup';/*form validation*/
import {useAuth} from "../context/AuthContext.jsx";
import {errorNotification} from "../../services/notification.js";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <Box>
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <Input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <Alert className="error" status={"error"} mt={2}>
                    <AlertIcon/>
                    {meta.error}
                </Alert>
            ) : null}
        </Box>
    );
};

const LoginForm = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    return (
        <Formik
            validateOnMount={true}
            validationSchema={
                Yup.object({
                    username: Yup.string()
                        .email("Must be valid email")
                        .required("Email is required"),
                    password: Yup.string()
                        .max(20, "Password cannot be more than 20 characters")
                        .required("Password is required")
                })
            }
            initialValues={{username: '', password: ''}}
            onSubmit={(values, {setSubmitting}) => {
                setSubmitting(true);
                login(values).then(res => {
                    navigate("/dashboard")
                    console.log("Successfully logged in");
                }).catch(err => {
                    errorNotification(
                        err.code,
                        err.response.data.message
                    )
                }).finally(() => {
                    setSubmitting(false);
                })
            }}>

            {({isValid, isSubmitting}) => (
                <Form>
                    <Stack mt={15}
                           spacing={15}
                           minW={'500px'}
                    >
                        <MyTextInput
                            label={"Email"}
                            name={"username"}
                            type={"email"}
                            placeholder={"project@mail.com"}
                        />
                        <MyTextInput
                            label={"Password"}
                            name={"password"}
                            type={"password"}
                            placeholder={"Type your password"}
                        />

                        <Button
                            type={"submit"}
                            disabled={!isValid || isSubmitting}>
                            Login
                        </Button>
                    </Stack>
                </Form>
            )}

        </Formik>
    )
}

const Login = () => {

    const { customer } = useAuth();
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
            <Flex p={8}
                  flex={1}
                  alignItems={'center'}
                  justifyContent={'center'}
            >
                <Stack spacing={4}
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
                    <Heading fontSize={'2xl'}
                             mb={15}
                             alignSelf={"center"}
                             color={"black"}
                    >Sign in to your account</Heading>
                    /*login form !!!*/
                    <LoginForm/>

                    <Link color={"blue.500"} href={"/signup"}>
                        Dont have an account? Signup now.
                    </Link>
                </Stack>
            </Flex>

        </Stack>
    );
}

export default Login;