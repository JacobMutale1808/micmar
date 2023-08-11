import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Json from '@/public/GridImages.json'

//TODO: Make assets API
const CategoryCard = () => {

    return (
        <div className='grid grid-cols-2'>
            {Json.Images.map((image) => {
                return (
                    <Link key={image.key} href={image.link}>
                        <div className="w-[182px] h-[182px] px-[8px] relative ">
                            <Image
                                alt='Card one'
                                width={182}
                                height={182}
                                src={image.URI}
                                loading='lazy'
                                className=''
                            />
                            <div className='absolute top-[65px] left-[26.68px] right-[20px]  text-center'>
                                <h3 className=' text-text-secondary text-mobile-h3 font-[600] leading-normal'>
                                    {image.content}
                                </h3>
                            </div>

                        </div>
                    </Link>
                )
            })}

        </div>)
}

export default CategoryCard;