import React from "react"

const Component1 = (
    {
        src,
        alt,
        heading,
        description
    }:
        {
            src: string,
            alt: string,
            heading: string,
            description: string
        }
) => {
    return (
        <div className="rounded-[9px] bg-button-gradient max-md:mx-6 md:w-[343px] xl:flex-wrap xl:w-1/4 w-full p-[2px]">
            <div className="bg-bg-header rounded-[9px] w-full h-full">
                <div className="flex flex-col flex-nowrap items-center rounded-[9px] py-12 bg-[#D426801A] w-full h-full bg-opacity-10">
                    <img src={src} alt={alt} className="w-[96px]"></img>
                    <div className="font-spicy text-[36px] mt-6 text-text-main text-center">
                        {heading}
                    </div>
                    <div className="font-caveat text-white mt-6 text-[28px] text-center px-4">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component1