import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import HamburgerMenu from '../../../public/icons/burger-nav.svg'
import MapIcon from '../../../public/icons/map.svg'
import InfoIcon from '../../../public/icons/info-icon.svg'
import CartIcon from '../../../public/icons/cart-icon.svg'
import HomeIcon from '../../../public/icons/mobile-icon.png'


const MobileMenuItems = function () {
    return (
        <div>
            <div className='px-[34px] pt-[46px] flex items-center'>
                <button className='mr-[41px]'>
                    <Image
                        width={40}
                        height={40}
                        src={HamburgerMenu}
                        alt="Hamburger menu" />
                </button>
                <Link href='/' className='mr-[35px]'>
                    <Image
                        width={40}
                        height={40}
                        src={MapIcon}
                        alt="Map icon" />
                </Link>
                <Link href='/' className='mr-[40.42px]'>
                    <Image
                        width={48.58}
                        height={40}
                        src={HomeIcon}
                        alt="Home icon"
                        className='shadow-logo' />
                </Link>
                <Link href='/' className='mr-[36px]'>
                    <Image
                        width={40}
                        height={40}
                        src={InfoIcon}
                        alt="Information icon"
                    />
                </Link>
                <Link href='/'>
                    <Image
                        width={40}
                        height={40}
                        src={CartIcon}
                        alt="Cart icon"
                    />
                </Link>
            </div>
        </div>
    );
}

export default MobileMenuItems