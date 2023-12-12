import { useCallback, useRef } from "react";
import { Image } from "../atoms/Image"
import HeroImg1 from "../../assets/images/ben-wiens-3vuNTi8KopU-unsplash.jpg"
import HeroImg2 from "../../assets/images/skate.jpg"
import HeroImg3 from "../../assets/images/ff.png"
import HeroImg4 from "../../assets/images/poesia.jpg"


import { HeroTexts } from "../particles/Data";
import Slider from "react-slick";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { ArrowCircleLeft, ArrowCircleRight, YoutubeLogo } from "@phosphor-icons/react";
import StickyIcons from "../molecules/StickyIcons";
import { Slide, Zoom } from "react-awesome-reveal";


const HeroSection = () => {

    const sliderRef = useRef<Slider | null>();

    // Function for next button
    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();

        }
    };
    // function for previous button
    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }

    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        cssEase: "linear",
    };

    const renderProfileImg = useCallback((element: number) => {
        switch (element) {
            case 0:
                return HeroImg1;
            case 1:
                return HeroImg2;
            case 2:
                return HeroImg3;
            case 3:
                return HeroImg4;
            default:
                return "";
        }
    }, [])
    return (
        <section className="w-full h-auto bg-gradient-to-r from-blue-500 to-cyan-500 relative overflow-x-hidden">

            <Slider ref={(slider) => (sliderRef.current = slider)} {...settings} className="h-full">
                {
                    HeroTexts.map((hero, index) => (
                        <main className="w-full lg:h-screen md:h-[50vh] h-screen relative bg-zinc-900 overflow-x-hidden" key={index}>
                            <Zoom className="h-full">
                                <Image className="md:w-[40%] w-full md:h-full h-1/2" alt="HeroImg1" objectCover="object-cover" image={renderProfileImg(index)} />
                            </Zoom>

                            <div className="md:w-[50%] w-full md:h-full h-1/2 absolute md:top-0 top-1/2 right-0 bg-zinc-900 flex flex-col md:justify-center justify-start lg:gap-8 md:gap-4 gap-2 lg:px-20 md:px-6 px-4 overflow-x-hidden">
                                <Text as="h1" className="lg:text-6xl md:text-4xl text-4xl md:mt-10 mt-10 text-zinc-100 font-extrabold">
                                    <Slide direction="right">
                                        {hero.Heading}
                                    </Slide>
                                </Text>
                                <Text as="p" className="lg:text-lg text-base text-zinc-400 my-4">
                                    <Slide direction="left">
                                 
                                        {hero.Prizes.map((prize, index) => (
                                        <span key={index}>{prize}<br /></span>
                                        ))}
                                    </Slide>
                                </Text>
                                <div className="flex items-center gap-8">
                                    <Slide direction="up">
                                    <a href={hero.link} target="_blank" className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-blue-500 to-cyan-500">
                                        {hero.Button}
                                    </a>

                                    </Slide>
                                    <Slide direction="up">
                                        <a href="/" className="flex items-center gap-2 text-red-500 hover:text-amber-500 group">
                                            <YoutubeLogo size={20} color="currentColor" weight="fill" />
                                            <Text as="span" className="text-zinc-100 group-hover:text-amber-500 uppercase text-xs">Live no dia do evento</Text>
                                        </a>
                                    </Slide>
                                </div>
                            </div>
                        </main>

                    ))
                }
            </Slider>
            <div className="flex justify-end lg:justify-start items-center gap-4 absolute lg:bottom-10 md:bottom-5 md:right-10 right-4 bottom-4">
                <Button onClick={previous} type="button" className="w-8 h-8 border rounded-full border-blue-500 flex items-center justify-center text-blue-500 hover:text-cyan-500 hover:border-cyan-500">
                    <ArrowCircleLeft size={20} color="currentColor" weight="light" />
                </Button>
                <Button onClick={next} type="button" className="w-8 h-8 border rounded-full border-blue-500 flex items-center justify-center text-blue-500 hover:text-cyan-500 hover:border-cyan-500">
                    <ArrowCircleRight size={20} color="currentColor" weight="light" />
                </Button>
            </div>

            <StickyIcons />

        </section>
    )
}

export default HeroSection