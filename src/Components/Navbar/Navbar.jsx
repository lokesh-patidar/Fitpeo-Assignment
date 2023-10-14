import {
    Box,
    Avatar,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
} from '@chakra-ui/react';
import { SidebarDrawer } from '../../Drawer/SidebarDrawer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getUserProfileFunc } from '../../ReduxToolkit/UserProfile/userProfileActions';
import { logoutFunction } from '../../ReduxToolkit/Authentication/authenticationActions';


export default function Navbar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    // const { user } = useSelector(state => state.userprofile);
    const userName = localStorage.getItem('cardUser');
    const userRole = localStorage.getItem('cardUserRole');

    const handleLogout = () => {
        dispatch(logoutFunction(navigate));
    }

    // useEffect(() => {
    //     dispatch(getUserProfileFunc());
    // }, [dispatch]);


    useEffect(() => {
        localStorage.setItem('comingFrom', location.pathname);
    }, [location.pathname]);


    return (
        <Box
            display='flex'
            justifyContent="space-between"
            p={2}
            alignItems='center'
            pl={5}
            pr={5}
            bg='white'
            mb={2}
            position='sticky'
            top={'0px'}
            zIndex={50}
            borderBottom='0.5px solid gray'
        >
            <Box display='flex' alignItems='center'>
                <Box display={{ base: 'flex', md: 'none' }}>
                    <SidebarDrawer />
                </Box>
                <Box display={{ base: 'none', sm: 'flex' }} width={{ base: '50%', sm: '60%', md: '70%', lg: '80%' }} ml={2}>
                    {/* <Image width='100%' src={hub_hubla_logo} alt='logo' /> */}
                </Box>
            </Box>

            <Menu>
                <MenuButton as={Box} cursor='pointer' minW='120px'>
                    <Box
                        display='flex'
                        justifyContent='row'
                        bg='#d8e2f2'
                        p={1}
                        borderRadius='5px'
                        pl={3}
                    >
                        <Box
                            display='flex'
                            justifyContent='left'
                            mr={3}
                            flexDir='column'
                        >
                            <Text pb={0} width='fit-content' fontSize={{ base: '70%', sm: '80%', md: '90%' }} fontWeight={500}>{userName || 'User Name'}</Text>
                            <Text pt={0} width='fit-content' fontSize={{ base: '60%', sm: '70%', md: '80%' }} fontWeight={400}>{userRole || 'User Role'}</Text>
                        </Box>
                        <Avatar bg={'pink'} p={{ base: 0, md: 1 }} pt={0} size={{ base: 'sm', md: 'md' }} src={''} />
                    </Box>
                </MenuButton>
                <MenuList boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px">
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
};