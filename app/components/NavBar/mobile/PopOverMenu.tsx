import React from 'react';
import Image from 'next/image'


import HamburgerMenu from '../../../public/icons/burger-nav.svg'

const PopOverMenu = () => {
    return (
        <button className='mr-[41px]'>
            <Image
                width={40}
                height={40}
                src={HamburgerMenu}
                alt="Hamburger menu" />
        </button>);
}

export default PopOverMenu;