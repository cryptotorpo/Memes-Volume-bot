import React from "react"

const Component3 = (
    {
        heading2,
        description2
    }:
        {
            heading2: string,
            description2: string
        }
) => {
    return (
        <div className="w-[400px] items-center border rounded-[9px] border-text-main px-6 py-8 bg-opacity-10 bg-[#D42680]">
            <div className="flex flex-col bg-[#D426801A]">
                <div className="font-spicy text-[28px] text-text-main text-center">
                    {heading2}
                </div>
                <div className="font-caveat text-white mt-6 text-[20px] text-center px-4">
                    {description2}
                </div>
            </div>
        </div>
    )
}

export default Component3