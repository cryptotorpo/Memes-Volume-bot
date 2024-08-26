import Button from "../components/atom/Button";
import Component1 from "../components/atom/Component1";
import Component2 from "../components/atom/Component2";
import Component3 from "../components/atom/Component3";
import human from "../components/Icon/human.svg";
import human2 from "../components/Icon/human2.svg";
import human3 from "../components/Icon/human3.svg";
import vector2 from "../components/Icon/vector2.svg";
import icon1 from "../components/Icon/icon1.svg";
import icon2 from "../components/Icon/icon2.svg";
import icon3 from "../components/Icon/icon3.svg";
import icon4 from "../components/Icon/icon4.svg";
import icon5 from "../components/Icon/icon2-1.svg";
import telegramIcon from "../components/Icon/telegramIcon.svg";
import telegramIcon2 from "../components/Icon/telegramIcon2.svg";
import thumb from "../components/Icon/thumb.svg";
import head from "../components/Icon/head.svg";
import arrowUp from "../components/Icon/arrowUp.svg";
import arrowUp45 from "../components/Icon/arrowUp45.svg";
import arrowRight from "../components/Icon/arrowRight.svg";
import arrowDown45 from "../components/Icon/arrowDown45.svg";
import animal from "../components/Icon/animal.svg";
import road from "../components/Icon/road.svg";
import footerbackground from "../components/Icon/footerbackground.svg";
import twitterX from "../components/Icon/twitterX.svg";

const Home = () => {
    return (
        <div className="bg-bg-header overflow-x-hidden">
            <img
                src="/img/meme-main.png"
                className="w-full"
            />
            <div className="flex flex-col mt-[98px] text-center">
                <div className="font-spicy md:text-[108px] text-[62px] text-text-main self-center">
                    Solana <span className="text-text-sub">Volume</span> Booster
                </div>
                <div className="font-caveat text-white text-3xl self-center px-2">
                    Just three clicks stand between you and a $10 million boost in your project's volume.
                    <br />
                    Don't wait, act now to create a $MEME effect.
                </div>
                <Button className="mt-16 text-white rounded-[9px] text-[20px] h-[74px] bg-button-gradient w-[255px] self-center">
                    Access Bot
                </Button>
                <div className="vector2 mt-12">
                    <img src={vector2} alt="vector2" className="cover float-left"></img>
                </div>
                <div className="flex xl:flex-row flex-col">
                    <div className="xl:w-1/2 w-full xl:ml-36 mx-2  text-center">
                        <div className="font-spicy md:text-[62px] text-[48px] mx-2 mt-20 text-text-main">
                            Achieve EXPONENTIAL Growth with MEMES
                        </div>
                        <div className="font-caveat text-white mt-6 mx-4 text-[33px]">
                            Elevate your project to new heights with MEMES. Harness our state-of-the-art tools and features to significantly enhance your trading volume, boost project visibility, and attract a broader investor base within the Solana blockchain ecosystem. Unlock your project's full potential with our innovative solutions tailored for transformative success.
                        </div>
                        <Button className="mt-16 text-white rounded-[9px] text-[20px] h-[74px] bg-button-gradient w-[255px] self-center">
                            Access Bot
                        </Button>
                    </div>
                    <div className="image2 xl:w-1/2 w-full mt-16 xl:flex xl:self-center">
                        <img src={human} alt="human" className="cover float-right "></img>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="font-spicy xl:text-[104px] md:text-[62px] sm:text-[48px] text-[36px] mx-2 mt-20 text-text-main">
                        Flexible Packages with <span className="text-text-sub">MEMES</span>
                    </div>
                    <div className="font-caveat text-white mt-6 text-[33px] mx-4 text-center">
                        Instantly start generating volume with our customized packages. With $MEMES, volume creation begins immediately upon purchasing a package.
                    </div>
                    <Button className="mt-16 text-white rounded-[9px] text-[20px] h-[74px] bg-button-gradient w-[255px] self-center">
                        Access Bot
                    </Button>
                </div>
                <div className="flex w-full xl:px-[170px] self-center mt-20 relative">
                    <div className="max-md:mx-10 mx-16 bg-button-gradient rounded-[42px] p-[3px] w-full">
                        <div className="bg-bg-header rounded-[42px] max-md:px-4 px-20 py-24 w-full">
                            <div className="flex xl:flex-row flex-col">
                                <div className="xl:w-1/2 flex flex-col xl:text-left justify-center">
                                    <div className="font-spicy text-[33px] text-text-main">
                                        Package:
                                    </div>
                                    <div className="font-caveat text-white text-[35px]">
                                        $MEMES Starter Booster: 10 SOL
                                    </div>
                                </div>
                                <div className="flex xl:w-1/2 max-sm:justify-center xl:mt-0 mt-4 max-md:flex-wrap flex-nowrap sm:justify-center sm:gap-4 justify-between">
                                    <img src={icon1} alt="icon1" className="m-2"></img>
                                    <img src={icon2} alt="icon2" className="m-2"></img>
                                    <img src={icon3} alt="icon3" className="m-2"></img>
                                    <img src={icon4} alt="icon4" className="m-2"></img>
                                </div>
                            </div>
                            <div className="flex mt-20 xl:flex-row flex-col">
                                <div className="xl:w-1/2 flex flex-col justify-center">
                                    <div className="font-spicy xl:text-left text-[35px] text-text-main">
                                        Your token price change:
                                    </div>
                                </div>
                                <div className="flex xl:w-1/2 justify-center">
                                    <img src={icon5} alt="icon5" className=""></img>
                                </div>
                            </div>
                            <div className="flex mt-16 max-xl:justify-center">
                                <div className="xl:w-1/2 flex flex-col justify-center">
                                    <div className="font-spicy max-xl:mx-4 xl:text-left text-[35px] text-text-main">
                                        Solana Price:
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="font-caveat text-white text-[35px]">
                                        $143.7
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-button-gradient flex xl:flex-row flex-col max-xl:items-center py-16 mt-20 rounded-[13px]">
                                <div className="w-1/2 flex flex-col justify-center items-center">
                                    <div className="font-spicy text-[48px] text-white text-left">
                                        Estimate<br />Boost Volume:
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="font-spicy text-white text-[79px]">
                                        $3.23M
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={human2} alt="human2" className="absolute bottom-1 right-52 xl:w-[30vw] max-xl:hidden"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full mt-36">
                    <div className="w-1/2 flex items-center justify-center visible max-xl:hidden">
                        <img src={thumb} alt="thumb" className="w-[72%]"></img>
                    </div>
                    <div className="xl:w-1/2 xl:pr-20 xl:px-0 px-8 flex flex-col justify-center">
                        <div className="font-spicy text-center xl:text-[62px] text-[48px] text-text-main">
                            Get Started Now
                        </div>
                        <div className="font-caveat text-white mt-6 text-[33px]">
                            Ready to unlock your project’s full potential? Access the MEMES Volume Bot through Telegram or right here with our flexible packages and start your journey toward unprecedented growth. With our dedicated support team by your side, achieving success has never been easier.
                        </div>
                        <div className="flex xl:justify-between justify-center xl:mt-0 mt-4">
                            <Button className="mt-16 text-white rounded-[9px] text-[20px] h-[74px] bg-button-gradient w-[255px]">
                                Access Bot
                            </Button>
                            <img src={head} alt="head" className="w-[160px] max-xl:hidden"></img>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-40">
                    <div className="font-spicy text-[62px] mt-20 text-text-main">
                        Why Choose <span className="text-text-sub">MEMES?</span>
                    </div>
                    <div className="font-caveat text-white mt-6 text-[33px] text-center">
                        Combine up to 6 MicroBots to generate transactions of varying<br /> sizes, creating a more organic chart appearance.
                    </div>
                    <div className="flex gap-[22px] max-xl:flex-wrap max-xl:justify-center mt-16 justify-between px-12">
                        <Component1 src={arrowUp} alt="arrowUp" heading="Boost Trading Volume" description="Achieve a substantial increase in your trading volume with just a few easy steps."></Component1>
                        <Component1 src={arrowUp45} alt="arrowUp45" heading="Generate FOMO" description="Utilize MicroBots to create a dynamic and authentic trading chart that captivates investors."></Component1>
                        <Component1 src={arrowRight} alt="arrowRight" heading="Increase Visibility" description="Stand out in the crypto community and gain the attention your project deserves.s"></Component1>
                        <Component1 src={arrowDown45} alt="arrowDown45" heading="Access Exclusive Features" description="Benefit from strategic volume enhancements and tailored solutions designed for optimal success."></Component1>
                    </div>
                </div>
                <div className="relative">
                    <div className="flex justify-center">
                        <Button className="mt-20 text-white rounded-[9px] text-[20px] h-[74px] bg-button-gradient w-[255px]">
                            Access Bot
                        </Button>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="font-spicy text-[62px] text-text-main mt-40">
                            Key Features Tailored for Your Project
                        </div>
                        <div className="font-caveat text-white mt-6 text-[33px] text-center lg:w-[975px]">
                            Unlock the potential of your project with $MEMES, featuring a set of carefully crafted features designed to boost your project's visibility,
                            attract investors, and drive growth within the dynamic Solana chain.
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 hidden xl:flex">
                        <img src={animal} alt="animal"></img>
                    </div>
                </div>
                <div className="mt-20 justify-center relative flex-col hidden xl:flex">
                    <img src={road} alt="road"></img>
                    {/* <img src="road.png" alt='road' className="pt-28"></img> */}
                    <div>
                        <div className="absolute left-[20%] top-[1%]">
                            <Component2 heading="Investor Magnetism" description="Attract more investors by showcasing increased trading activity. 
                        #MEME positions your project as a compelling opportunity, drawing in potential supporters."></Component2>
                        </div>
                        <div className="absolute right-[19%] -top-[3%]">
                            <Component2 heading="Exclusive Access" description="$MEME is designed exclusively for projects seeking enhanced
                         visibility, growth, and increased exposure. With Orbitt MM, you can gain a competitive edge in the market and 
                         achieve your goals faster."></Component2>
                        </div>
                        <div className="absolute left-[3%] top-[30%]">
                            <Component2 heading="Strategic Volume Boost" description="$MEME  focuses on strategically increasing your project's trading volume
                         creating a dynamic environment that attracts potential investors."></Component2>
                        </div>
                        <div className="absolute right-[30%] top-[43%]">
                            <Component2 heading="Flexible Packages" description="Instantly generate volume with our tailored packages. With $MEME your 
                        volume creation begins immediately after purchasing a package."></Component2>
                        </div>
                        <div className="absolute right-[4.5%] top-[35%]">
                            <Component2 heading="Dedicated Support" description="Benefit from dedicated customer support committed to helping your project to thrive.
                         Our team is here to assist in every step"></Component2>
                        </div>
                        <div className="absolute left-[17%] bottom-[13%]">
                            <Component3 heading2="Token Visibility Enhancement" description2="Elevate your token's visibility with Orbitt MM's specialized features. 
                        Capture the crypto community's attention and stand out among other projects on the Solana network."></Component3>
                        </div>
                        <div className="flex justify-center">
                            <Button className="mt-40 text-white rounded-[9px] text-[20px] h-[74px] bg-button-gradient w-[255px]">
                                Access Bot
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex xl:hidden flex-col mt-20 items-center gap-5 justify-center">
                    <Component2 heading="Investor Magnetism" description="Attract more investors by showcasing increased trading activity. 
                        #MEME positions your project as a compelling opportunity, drawing in potential supporters."></Component2>
                    <Component2 heading="Exclusive Access" description="$MEME is designed exclusively for projects seeking enhanced
                         visibility, growth, and increased exposure. With Orbitt MM, you can gain a competitive edge in the market and 
                         achieve your goals faster."></Component2>
                    <Component2 heading="Strategic Volume Boost" description="$MEME  focuses on strategically increasing your project's trading volume
                         creating a dynamic environment that attracts potential investors."></Component2>
                    <Component2 heading="Flexible Packages" description="Instantly generate volume with our tailored packages. With $MEME your 
                        volume creation begins immediately after purchasing a package."></Component2>
                    <Component2 heading="Dedicated Support" description="Benefit from dedicated customer support committed to helping your project to thrive.
                         Our team is here to assist in every step"></Component2>
                    <Component2 heading="Token Visibility Enhancement" description="Elevate your token's visibility with Orbitt MM's specialized features. 
                        Capture the crypto community's attention and stand out among other projects on the Solana network."></Component2>
                    <div>
                        <Button className="mt-40 text-white rounded-[9px] text-[20px] h-[74px] bg-button-gradient w-[255px]">
                            Access Bot
                        </Button>
                    </div>
                </div>
                <div className="flex xl:mb-40 flex-col xl:flex-row gap-x-10 gap-y-10 mt-10 xl:items-center items-end">
                    <div className="w-full xl:px-36 px-10">
                        <div className="font-spicy text-[62px] mt-20 text-text-main">
                            Set $MEME directly <br />on Telegram
                        </div>
                        <div className="font-caveat text-white mt-6 text-[33px]">
                            Explore the powerful capabilities of $MEME which is conveniently accessible on Telegram. Connect with a user-friendly bot that can help you achieve
                            success for your Solana project. Are you ready to learn more? Click 'Access Bot' and start your journey towards the future of tremendous growth.
                            Your path to success is just a few clicks away!
                        </div>

                        <Button className="mt-16 text-white rounded-[9px] text-[20px] h-[74px] bg-button-gradient w-[255px] self-center">
                            Access Bot
                        </Button>
                    </div>
                    <div className="image2 w-full -mr-14">
                        <img src={human3} alt="human" className="cover float-end"></img>
                    </div>
                </div>
                <div className="flex container self-center mt-20 mb-40 relative bg-button-gradient p-[3px] rounded-[42px] mx-5 sm:mx-16 ">
                    <div className="rounded-[42px] w-full flex flex-col items-center text-center bg-bg-header">
                        <div className="font-spicy sm:text-[62px] text-[40px] text-text-main  sm:px-20  pt-24 ">
                            JOIN <span className="text-text-sub">$MEME</span> COMMUNITY
                        </div>
                        <div className="font-caveat text-white mt-6 text-[33px] pr-20  px-20 ">
                            Become a member of the $MEMES Community for engaging discussions, valuable updates, and collaborative opportunities. Connect with fellow enthusiasts and industry experts on the $MEMES Telegram group.<br></br>Your Path to Success is Just a Few Clicks Away.
                        </div>

                        <Button className="mt-16 text-white rounded-[9px] text-[20px] h-[74px] bg-button-gradient w-[255px]">
                            Go To Group
                        </Button>
                        <img src={footerbackground} alt="footerbackground" className="w-full cover rounded-[42px]"></img>
                    </div>
                </div>
                <div className="flex justify-center flex-col sm:flex-row items-center">
                    <div className="font-caveat text-white text-[35px] flex self-center">
                        Reach out to us on:
                    </div>
                    <div className="flex">
                        <img src={telegramIcon2} alt="telegramIcon2" className="w-[60px] mx-8"></img>
                        <img src={twitterX} alt="twitterX" className="w-[50px]"></img>
                    </div>
                </div>
                <div className="font-caveat text-white text-[35px] mt-8 mb-12 flex self-center text-center">
                    for direct support and community engagement.
                </div>
            </div>
        </div>
    )
}

export default Home;