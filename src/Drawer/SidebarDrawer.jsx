import { Accordion, AccordionButton, AccordionItem, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";
import { SidebarData } from "../Data/SidebarData";
import { homeRoute } from "../AllRoutes/AllRoute";

const SidebarDrawer = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    const currentUrl = new URL(window.location.href);
    const pathname = currentUrl.pathname;
    var urlName = pathname.substring(1);
    const text = urlName.split("/");
    const userRole = localStorage.getItem('cardUserRole');

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
                                    SidebarData?.filter((el) => {
                                        if (userRole === 'Admin') {
                                            return el.title !== 'Users Details'
                                        }
                                        else {
                                            return el;
                                        }
                                    }).map((el) => {
                                        return (
                                            <Accordion allowToggle w='100%' key={el.id}>
                                                <AccordionItem border='none'>
                                                    <Link to={`${el.path}`}>
                                                        <AccordionButton
                                                            display='flex'
                                                            pl={1}
                                                            width={{ base: '95%' }}
                                                            alignItems='center'
                                                            justifyContent='space-between'
                                                            borderRadius='5px'
                                                            textDecor='none'
                                                            fontSize={{ base: '90%', md: '95%', lg: '90%', xl: '125%' }}
                                                            background={`${homeRoute}/${text[1]}` === el.path ? '#c0effc' : ''}
                                                            color={`${homeRoute}/${text[1]}` === el.path ? '#0499c2' : 'rgba(70, 66, 85, 1)'}
                                                            _hover={{ bg: '#e9f2f5' }}
                                                            onClick={handleRemoveEventIdTInLocalStorage}
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
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export { SidebarDrawer };