import React from 'react';
import { BsClipboardData, BsCalendar3 } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { AiOutlineSetting, AiFillApi, AiOutlineLogout } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { GrProjects } from "react-icons/gr";

const Sidebar = () => {

    const menus = [
        {
            id:1,
            title:'Auto xpress design'
        },
        {
            id:2,
            title:'Leave mgt'
        }
    ]
    const menuLinks = [
        {
            id:1,
            path:'/',
            title:'Dashboard',
            icon:<BsClipboardData />
        },
        {
            id:2,
            path:'/calendar',
            title:'Calendar',
            icon:<BsCalendar3 />
        },
        {
            id:5,
            path:'Project',
            title:"Projects",
            icon:<GrProjects />,
            projects:[
                {
                    id:1,
                    title:'Task mgt',
                    path:'/task'
                },
                {
                    id:2,
                    title:'Chat app design',
                    path:'/chat'
                }
            ]
        },
        {
            id:3,
            path:'/messages',
            title:'Messages',
            icon:<TiMessages />
        },
        {
            id:4,
            path:'/settings',
            title:'Settings',
            icon:<AiOutlineSetting />
        }
    ]
  return (
    <div className='sidebar'>
        <div className='logo'><AiFillApi />BOARDJET</div>
        <ul>
            {
                menuLinks && menuLinks.map((menu) => (
                    <Link key={menu.id} to={menu.path} className='menu-items'>{menu.icon}{menu.title}
                    <div className='projects-menu-items'>
                    {
                        menu.projects && menu.projects.map((menu) => (
                            <Link key={menu.id} to={menu.path}>{menu.title}</Link>
                        ))
                    }
                    </div>
                    </Link>
                ))
            }
        </ul>
        <div className='logout'>
            <div><AiOutlineLogout /></div>
            <div><h2>Logout</h2></div>
        </div>
    </div>
  )
}

export default Sidebar