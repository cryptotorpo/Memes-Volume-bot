import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../atom/Button";
import Logo from "../Icon/Logo";
import Telegram from "../Icon/Telegram";
import Twitter from "../Icon/Twitter";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../atom/Dropdown";
import { Grip } from 'lucide-react';

const Header = () => {

    const location = useLocation().pathname;

    return (
        <div className="bg-bg-header w-full xl:pl-[123px] lg:px-[96px] px-[10px] pt-[33px] pb-[22px] flex justify-between items-center relative">
            <div className="w-[96px]">
                <Logo />
            </div>
            <div className="flex xl:gap-[75px] max-lg:hidden lg:gap-[48px] gap-[48px]">
                <Link to="/" className={`text-[27px] font-bold ${location === "/" ? "bg-button-gradient bg-clip-text text-transparent" : "text-white"}`}>Home</Link>
                <Link to="/memebot" className={`text-[27px] font-bold ${location === "/memebot" ? "bg-button-gradient bg-clip-text text-transparent" : "text-white"}`}>$MEMES bot</Link>
            </div>
            <div className="flex lg:gap-[72px] gap-[20px] items-center">
                {
                    location === "/" &&
                    <div className="flex gap-[30px] items-center">
                        <Twitter />
                        <Telegram />
                    </div>
                }
                <Button className="text-white max-lg:hidden rounded-[9px] bg-button-gradient px-6 py-3 text-[20px] font-medium">
                    {location === "/" ? "Buy Now" : "Connect Wallet"}
                </Button>
                <div className="dropdown lg:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger><Grip className="w-[42px] h-[44px] text-white" /></DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-bg-header mr-5">
                            <DropdownMenuItem>
                                <Link to="/" className={`py-2 text-[27px] font-bold ${location === "/" ? "bg-button-gradient bg-clip-text text-transparent" : "text-white"}`}>Home</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to="/memebot" className={`text-[27px] py-2 font-bold ${location === "/memebot" ? "bg-button-gradient bg-clip-text text-transparent" : "text-white"}`}>$MEMES bot</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[27px] text-white">
                                {location === "/" ? "Buy Now" : "Connect Wallet"}
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}

export default Header;