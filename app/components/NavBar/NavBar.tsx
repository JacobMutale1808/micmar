import Link from 'next/link';
import Image from 'next/image'
import React from 'react'

import MobileMenuItems from './MobileMenuItems'

const NavBar = () => {
    return (
        <nav className='bg-primary h-[172px] '>
            <MobileMenuItems />
        </nav>
    );
}

export default NavBar



