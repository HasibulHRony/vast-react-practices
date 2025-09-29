import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" },
];



const NavBar = () => {
    const [shawIcon, setShawIcon] = useState(false)
    const navOption = navItems.map((nav) =>
        <li key={nav.id} className='ml-5'><a href={nav.path}>{nav.name}</a></li>
    )

    return (
        <nav className='flex justify-between mx-4 md:mx-10 mt-5 items-start'>
            <span className='flex gap-2'>
                {
                    shawIcon ?
                        <X className='md:hidden' onClick={() => setShawIcon(!shawIcon)}></X> :
                        <Menu className='md:hidden' onClick={() => setShawIcon(!shawIcon)}></Menu>
                }
                <ul className={`md:hidden absolute bg-green-500 duration-1000 ${shawIcon ? "top-10" : "-top-40"}`}>
                    {
                        navOption
                    }
                </ul>
                <h1>Logo</h1>
            </span>
            <ul className='hidden md:flex'>
                {
                    navOption
                }
            </ul>
            <button>SignUp</button>
        </nav>

    );
};

export default NavBar;