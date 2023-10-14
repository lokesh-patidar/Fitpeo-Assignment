import { RiMenuUnfoldFill } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { HiFastForward } from "react-icons/hi";


export const SidebarData = [
    {
        id: 1,
        icon: <GoHome />,
        title: 'Dashboard',
        space: <HiFastForward color="transparent" />,
        path: `/dashboard`,
    },
    {
        id: 2,
        icon: <RiMenuUnfoldFill />,
        title: 'Users Details',
        space: <HiFastForward color="transparent" />,
        path: `/user-details`,
    },
    {
        id: 3,
        icon: <RiMenuUnfoldFill />,
        title: 'Customer Details',
        space: <HiFastForward color="transparent" />,
        path: `/customer-details`,
    },
    {
        id: 4,
        icon: <RiMenuUnfoldFill />,
        title: 'All Messages',
        space: <HiFastForward color="transparent" />,
        path: `/all-messages`,
    },

];
