import { Accordion, AccordionButton, AccordionItem, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";
import { SidebarData } from "../Data/SidebarData";
import { BiChevronRight } from "react-icons/bi";

const SidebarDrawer = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    const currentUrl = new URL(window.location.href);
    const pathname = currentUrl.pathname;
    var urlName = pathname.substring(1);
    const text = urlName.split("/");

    const handleRemoveEventIdTInLocalStorage = () => {
        onClose();
    }

    return (
        <>
            <Button ref={btnRef} border='1px solid gray' onClick={onOpen}>
                <GrMenu />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='full'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Box width={{ base: '50%' }}>
                            {/* <Image width='100%' src={hub_hubla_logo} alt='logo' /> */}
                        </Box>
                        <Box
                            width='100%'
                            minH='100vh'
                            pt={4}
                            pr={2}>
                            <Box>
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
                                                            background={`/${text[0]}` === el.path ? '#4442c2' : ''}
                                                            color={`/${text[0]}` === el.path ? 'white' : '#a1a2b3'}
                                                            _hover={{ bg: '#1c478c' }}
                                                            onClick={handleRemoveEventIdTInLocalStorage}
                                                        >
                                                            <Box display='flex' justifyContent='space-between' alignItems='center' textAlign='left' width='100%'>
                                                                <Box display='flex' alignItems='center'>{el.icon}{el.space}{el.title}</Box>
                                                                <BiChevronRight />
                                                            </Box>
                                                        </AccordionButton>
                                                    </Link>
                                                </AccordionItem>
                                            </Accordion>
                                        );
                                    })
                                }
                            </Box>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export { SidebarDrawer };