import { BsGearFill, BsGrid1X2Fill, BsPeopleFill } from "react-icons/bs";

export const SIDEBAR = [
    {
        id: 1,
        title: 'Dashboard',
        path: '/dashboard',
        icon: <BsGrid1X2Fill/>,
    },
    {
        id: 2,
        title: 'Users',
        path: '/users',
        icon: <BsPeopleFill/>,
    },
    {
        id: 3,
        title: 'Settings',
        path: '/settings',
        icon: <BsGearFill/>,
    }
]