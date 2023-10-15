import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";

const Dashboard = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box
            width={{ base: '100%', md: '75%', lg: '80%' }}
            display='flex'
            p={3}
        >
            <Navbar />
        </Box>
    );
};

export { Dashboard };
