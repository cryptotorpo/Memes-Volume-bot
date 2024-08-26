"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "../../lib/utils"

const Slider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
    <>
        <SliderPrimitive.Root
            ref={ref}
            className={cn(
                "relative flex w-full touch-none select-none items-center",
                className
            )}
            {...props}
        >
            <SliderPrimitive.Track className="relative h-[17px] w-full grow overflow-hidden rounded-full bg-[#D9D9D9]">
                <SliderPrimitive.Range className="absolute h-full bg-[#423BC7]" />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb className="relative block h-[25px] w-[25px] rounded-full bg-white">
            </SliderPrimitive.Thumb>
            <div className="absolute top-9 text-[29px] font-caveat text-white flex w-full touch-none select-none items-center">
                <span className="absolute left-0">0</span>
                <span className="absolute right-0">{props.max}</span>
            </div>
        </SliderPrimitive.Root>
    </>
))

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }