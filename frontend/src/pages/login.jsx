import { Box, FormControl, FormLabel, Text, useToast,Input, Button } from "@chakra-ui/react";
import { Form, Link, useNavigate } from "react-router-dom"
import { userLogin } from "../fetcher";
import {useForm} from "react-hook-form"

export default function LoginPage(){
    const {
        handleSubmit,
        register,
        watch,
        formState: {errors}
    } = useForm();
    const navigate = useNavigate();
    const toast = useToast()

    const onSubmit = async (data) => {
        try{
            const res = await userLogin(data);

        }
        catch(err){

        }
    }
    return (
        <Box mx={"auto"} textAlign={"center"}>
            <Text>
                Login to My BookStore
            </Text>
            <Box my={"2.5"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input 
                            type="text"
                            name="email"
                            placeholder="Enter Your Email" 
                            />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Enter Your Password"
                            />
                    </FormControl>
                    <Button type="submit" mt={'5'}>
                        Submit
                    </Button>
                    <Link to={'/register'}>
                        <Text>
                            Don't Have an Account? Click Here to Register
                        </Text>
                    </Link>
                </form>
            </Box>
        </Box>
    )
}