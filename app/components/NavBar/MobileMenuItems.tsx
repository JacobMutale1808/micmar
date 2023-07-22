import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import HamburgerMenu from '../../../public/icons/burger-nav.svg'
import MapIcon from '../../../public/icons/map.svg'
import HomeIcon from '../../../public/icons/mobile-icon.png'


const MobileMenuItems = function () {
    return (<div className='px-[34px] pt-[46px] flex items-center'>
        <button className='mr-[41px]'>
            <Image
                width={40}
                height={40}
                // objectFit="cover"
                src={HamburgerMenu}
                alt="Hamburger menu" />
        </button>
        <Link href='/' className='mr-[35px]'>
            <Image
                width={40}
                height={40}
                // objectFit="cover"
                src={MapIcon}
                alt="Map icon" />
        </Link>
        <div className='bg-home-logo'>

        </div>
        {/* <Link href='/' className=''>
            <Image
                width={48.58}
                height={40}
                // objectFit="cover"
                src={HomeIcon}
                alt="Home icon" 
                className='shadow-logo'/>
        </Link> */}
        <Link href='/'></Link>
    </div>);
}

export default MobileMenuItems