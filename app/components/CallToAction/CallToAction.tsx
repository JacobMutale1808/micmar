import Image from 'next/image'
import Link from 'next/link'

import Image1 from '@/public/images/eurolux-lifestyle-1.png'

//TODO: GRAB IMAGES AND TEXT FOR CALL TO ACTION

const CallToAction = () => {
    return (
        <div className="mt-[20px]">
            <div className="w-[100%] h-[389px] px-[8px] relative">
                <Image
                    alt='Card one'
                    src={Image1}
                    loading='lazy'
                    className=''
                />
                <div className='absolute top-[169px] left-[26.68px] right-[26.68px]  text-center'>
                    <h2 className=' text-text-primary text-mobile-h2 font-[600] leading-[100%] tracking-[0.72px]'>
                        Light your space in style
                    </h2>

                </div>
                <div className='absolute  top-[290px]  left-[119.54px] right-[121.14px] text-center p-0'>
                    <Link href='' className=' bg-background-primary px-[32px] py-[18px]'>
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;