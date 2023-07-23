const Hero = function () {
    return (
        <div className="h-[429px] bg-secondary flex flex-col pt-[63px]">
            <h1 className="text-text-secondary text-mobile-h1 font-bold leading-[84.5%] not-italic tracking-[1.6px] text-center">
                Winter Sale
                </h1>
            <hr className=" ml-[25px] mr-[25px] mt-[25px] text-background-primary " />
            <p className="text-text-secondary text-center not-italic text-mobile-p leading-[99.5%] tracking-[0.96px] font-[400] mt-[37px]">
                Enjoy savings on your weekly essentials
            </p>
        </div>
    );
}

export default Hero;