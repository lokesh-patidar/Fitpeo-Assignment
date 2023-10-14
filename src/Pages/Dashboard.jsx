import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

const Dashboard = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box
            width={{ base: '100%', md: '75%', lg: '80%' }}
            display='flex'
        >
            <Box
                width='100%'
                minH='100vh'
                bg='white'
            >
                Dashboard
            </Box>
        </Box>
    );
};

export { Dashboard };
