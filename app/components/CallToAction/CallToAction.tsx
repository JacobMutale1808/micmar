import Image from 'next/image'
import Image1 from '@/public/images/eurolux-lifestyle-1.png'

//TODO: GRAB IMAGES AND TEXT FOR CALL TO ACTION

const CallToAction = () => {
    return (
        <div className="mt-[20px]">
            <div className="w-[100%] h-[389px] px-[8px]">
                <Image
                    alt='Card one'
                    src={Image1}
                    loading='lazy'
                />
            </div>
        </div>
    );
}

export default CallToAction;