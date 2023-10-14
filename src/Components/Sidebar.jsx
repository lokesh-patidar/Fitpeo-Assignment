import { Accordion, AccordionButton, AccordionItem, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SidebarData } from "../Data/SidebarData";


const SideBar = () => {

    const currentUrl = new URL(window.location.href);
    const pathname = currentUrl.pathname;
    var urlName = pathname.substring(1);
    const text = urlName.split("/");
    console.log({ SidebarData });

    return (
        <Box
            minH='100vh'
            width={{ base: '25%', md: '25%', lg: '20%' }}
            className="firstContainer"
            display={{ base: 'none', md: 'flex' }}
            flexDir='column'
            pl={2}
            pb={3}
            bg='#040275'
        >
            <Box
                mt={2}
                position='sticky'
                top={'75px'}
            >
                {
                    SidebarData?.length > 0 &&
                    SidebarData?.map((el) => {
                        return (
                            <Accordion allowToggle w='100%' key={el.id}>
                                <AccordionItem border='none'>
                                    <Link to={`${el.path}`}>
                                        <AccordionButton
                                            display='flex'
                                            pl={2}
                                            width={{ base: '95%' }}
                                            alignItems='center'
                                            justifyContent='space-between'
                                            borderRadius='5px'
                                            textDecor='none'
                                            fontSize={{ base: '90%', md: '95%', lg: '90%', xl: '125%' }}
                                            background={`/${text[1]}` === el.path ? '#d6cdb4' : ''}
                                            color={`/${text[1]}` === el.path ? 'black' : 'rgba(70, 66, 85, 1)'}
                                            _hover={{ bg: '#e9f2f5' }}
                                        >
                                            <Box display='flex' justifyContent='left' alignItems='center' textAlign='left' width='100%'>
                                                {el.icon}{el.space}{el.title}
                                            </Box>
                                        </AccordionButton>
                                    </Link>
                                </AccordionItem>
                            </Accordion>
                        );
                    })
                }
            </Box>
        </Box >
    );
};

export { SideBar };