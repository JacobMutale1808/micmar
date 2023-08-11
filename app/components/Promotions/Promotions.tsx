import Link from "next/link";

const Promotions = () => {
    return (
        <div className="px-[8px]">
            <div className="bg-secondary h-[389px] w-[100%] ">
                <div className="text-center pt-[51px]">
                    <h2 className="text-text-secondary text-mobile-h2 font-[600] leading-[100%] tracking-[0.72px]">
                        New Arrivals!
                    </h2>
                </div>
                <div className="text-center mt-[20px]">
                    <p className="text-text-secondary text-[18px] font-[400] leading-[130%] tracking-[0.72px]">
                        Find out what&apos;s new at <br />Micmar
                    </p>
                </div>
                <div className="mt-[154px]  pl-[105px] ">
                    <Link href='/Shop' className=' bg-background-primary px-[32px] py-[18px]'>
                        Find out more
                    </Link>
                </div>
            </div>
            <div className="bg-secondary h-[389px] w-[100%] mt-[20px]">
                <div className="text-center pt-[51px]">
                    <h2 className="text-text-secondary text-mobile-h2 font-[600] leading-[100%] tracking-[0.72px]">
                        Win a K1000 <br/>Micmar gift card
                    </h2>
                </div>
                <div className="text-left mt-[20px] pl-[13px] pr-[140px]">
                    <p className="text-text-secondary text-[18px]  leading-[130%] tracking-[0.72px]">
                        <span className="font-[700]">Leave us a review </span>for a chance to win 1 of 10 K1000 Micmar gift card*
                    </p>
                </div>
           
            </div>
        </div>
    );
}

export default Promotions;