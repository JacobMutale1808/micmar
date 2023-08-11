import Image from 'next/image'
import Link from 'next/link'

import Image1 from '@/public/images/eurolux-lifestyle-1.png'
import Image2 from '@/public/images/heating-lifestyle-1.png'

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
                    <Link href='/Shop' className=' bg-background-primary px-[32px] py-[18px]'>
                        Shop Now
                    </Link>
                </div>
            </div>
            <div className='h-[389px] bg-secondary mx-[8px] flex flex-col items-center justify-center'>
                <h2 className='text-mobile-h2 text-center text-text-secondary font-semibold leading-7 tracking-[0.72px]'>See all of our latest products</h2>
                <p className='mt-[32px] text-text-secondary text-center text-[18px] font-normal leading-[17.91px] tracking-[0.72px]'>Enjoy savings on your weekly essentials</p>
                <Link href='/Shop' className=' bg-background-primary px-[32px] py-[18px] mt-[63px]'>
                        Shop Now
                </Link>
            </div>
            <div className="w-[100%] h-[389px] px-[8px] mt-[20px] relative">
                <Image
                    alt='Card one'
                    src={Image2}
                    loading='lazy'
                    className=''
                />
                <div className='absolute top-[102px] left-[26.68px] right-[26.68px]  text-center'>
                    <h2 className=' text-text-secondary text-mobile-h2 font-[600] leading-[100%] tracking-[0.72px]'>
                        Heating just got cheaper
                    </h2>
                </div>
                <div className='absolute top-[192px] left-[26.68px] right-[26.68px]  text-center'>
                    <p className=' text-text-secondary text-[18px] font-[400] leading-[99.5%] tracking-[0.72px]'>
                        Enjoy savings on your weekly essentials
                    </p>
                </div>
                <div className='ab'>

                </div>
                <div className='absolute  top-[290px]  left-[119.54px] right-[121.14px] text-center p-0'>
                    <Link href='/Shop' className=' bg-background-primary px-[32px] py-[18px]'>
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;