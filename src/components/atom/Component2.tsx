import React from "react"

const Component2 = (
    {
        heading,
        description
    }:
        {
            heading: string,
            description: string
        }
) => {
    return (
        <div className="md:w-[344px] w-4/5 items-center border rounded-[9px] border-text-main px-6 py-8 bg-opacity-10 bg-[#D42680]">
            <div className="flex flex-col bg-[#D426801A]">
                <div className="font-spicy text-[28px] text-text-main text-center">
                    {heading}
                </div>
                <div className="font-caveat text-white mt-[10px] text-[20px] text-center px-4">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default Component2