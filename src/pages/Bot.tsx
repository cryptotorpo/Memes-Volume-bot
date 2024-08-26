import { useState, ChangeEvent, useCallback } from "react";
import Input from "../components/atom/Input";
import Radio from "../components/atom/Radio";
import Button from "../components/atom/Button";
import { Slider } from "../components/atom/Slider";
const format = (value: number) => `${value}x`;

const Bot = () => {

    const [volumeOption, setVolumeOption] = useState<string>("daily");
    const [sliderValue, setSliderValue] = useState(10);

    const changeAmountValue = (value: number[]) => {
        setSliderValue(value[0]);
    }

    return (
        <div className="flex w-full pt-[99px] pb-[124px] bg-bot-pattern bg-cover bg-no-repeat relative">
            <div className="mx-auto xl:w-2/3 w-[90%] max-w-[900px] sm:w-auto font-caveat">
                <div className="font-spicy text-[64px] text-center text-text-main">
                    $MEME <span className="text-text-sub">Volume</span> Bot
                </div>
                <div className="mt-[39px] flex flex-col w-full items-start">
                    <div className="text-[36px] text-white">
                        Token Address Here
                    </div>
                    <div className="mt-5 w-full">
                        <Input />
                    </div>
                </div>
                <div className="flex flex-col items-start mt-[65px]">
                    <div className="font-spicy text-[36px] text-white">
                        Volume  Option
                    </div>
                    <div className="w-full flex flex-col xl:flex-row gap-y-2 mt-5 justify-between xl:items-center">
                        <Radio content="daily" option={volumeOption} setOption={setVolumeOption} />
                        <div className="xl:w-2/3">
                            <Input />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start mt-[65px]">
                    <div className="font-spicy text-[36px] text-white">
                        Volume  Option
                    </div>
                    <div className="w-full flex flex-col xl:flex-row gap-y-2 mt-5 justify-between xl:items-center">
                        <Radio content="hourly" option={volumeOption} setOption={setVolumeOption} />
                        <div className="xl:w-2/3">
                            <Input />
                        </div>
                    </div>
                </div>
                <div className="mt-[60px] flex xl:justify-between w-full flex-col xl:flex-row gap-y-10 xl:items-center">
                    <div className="font-spicy text-[48px] text-white">
                        SOL Input
                    </div>
                    <div className="xl:w-2/3">
                        <Slider defaultValue={[2]} value={[sliderValue]} onValueChange={changeAmountValue} max={10} step={1} />
                    </div>
                </div>
                <div className="mt-[136px] w-full flex justify-center">
                    <Button className="rounded-[10px] p-[10px] text-white bg-button-gradient text-[36px] font-caveat">
                        RUN BOT
                    </Button>
                </div>
            </div>
            <div className="absolute -bottom-[71px] left-0 max-xl:hidden">
                <img
                    src="/img/down-man.png"
                    alt=""
                />
            </div>
            <div className="absolute bottom-0 right-0 max-xl:hidden">
                <img
                    src="/img/chair-man.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Bot;