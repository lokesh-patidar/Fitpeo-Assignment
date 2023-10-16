import { MdOutlineLiveHelp } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { HiFastForward } from "react-icons/hi";
import { CiPercent } from "react-icons/ci";
import { PiCodesandboxLogoLight, PiUserRectangle } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";

export const SidebarData = [
    {
        id: 1,
        icon: <GoHome />,
        title: 'Dashboard',
        space: <HiFastForward color="transparent" />,
        path: `/`,
    },
    {
        id: 2,
        icon: <PiCodesandboxLogoLight />,
        title: 'Products',
        space: <HiFastForward color="transparent" />,
        path: `/products`,
    },
    {
        id: 3,
        icon: <PiUserRectangle />,
        title: 'Customers',
        space: <HiFastForward color="transparent" />,
        path: `/customers`,
    },
    {
        id: 4,
        icon: <GiReceiveMoney />,
        title: 'Income',
        space: <HiFastForward color="transparent" />,
        path: `/income`,
    },
    {
        id: 5,
        icon: <CiPercent fontWeight={'bold'} />,
        title: 'Promote',
        space: <HiFastForward color="transparent" />,
        path: `/promote`,
    },
    {
        id: 6,
        icon: <MdOutlineLiveHelp />,
        title: 'Help',
        space: <HiFastForward color="transparent" />,
        path: `/help`,
    },
];
