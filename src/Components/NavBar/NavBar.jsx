import React from 'react';

const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" },
];



const NavBar = () => {
    return (
        <nav className='flex justify-between mx-10 items-center my-3'>
            <h1>Logo</h1>
            <ul className='flex'>
                {
                    navItems.map((nav) => {
                        return (
                            <li className='ml-5'><a href={nav.path}>{nav.name}</a></li>
                        )
                    })
                }
            </ul>
            <button>SignUp</button>
        </nav>

    );
};

export default NavBar;