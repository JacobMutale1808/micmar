import Link from 'next/link';
import React from 'react'
// mt-[46px] mr-[33px] ml-[34px] mb-[18px]
const NavBar = () => {
    return (
        <nav className='bg-primary h-[172px] '>
            <div className=''>
                <Link href='/'><svg></svg></Link>
                <Link href='/'></Link>
                <Link href='/'></Link>
                <Link href='/'></Link>
            </div>
        </nav>
    );
}

export default NavBar
