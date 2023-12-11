import { Text } from "../atoms/Text"
import { TestimonialTexts } from "../particles/Data";
import becas from "../../assets/patrocinios/3d.png"
import cacau from "../../assets/patrocinios/caucautatto.jpg"
import djkinho from "../../assets/patrocinios/djkinho.jpg"
import phtelecom from "../../assets/patrocinios/phtelecom.jpg"
import quebrada from "../../assets/patrocinios/quebradaforte.jpg"
import { useCallback } from "react";
import Slider from "react-slick";
import { Card } from "../molecules/Card";
import { Image } from "../atoms/Image";
import { Star } from "@phosphor-icons/react";


const Testimonials = () => {

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        cssEase: "linear",
        nextArrow: <br />,
        prevArrow: <br />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    const renderClients = useCallback((element: number) => {
        switch (element) {
            case 0:
                return becas;
            case 1:
                return djkinho;
            case 2:
                return phtelecom;
            case 3:
                return cacau;
            case 4:
                return quebrada;
            default:
                return "";
        }
    }, [])
    return (
        <section className="w-full h-auto flex items-center from-blue-500 to-cyan-500">
        <main className="w-full lg:h-[700px] md:h-[600px] flex flex-col justify-center items-center gap-10 md:gap-10 py-12 md:py-0">
            <div className="flex flex-col mt-10 items-center relative before:absolute before:-bottom-6 before:left-30 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-blue-500 before:to-cyan-500 z-10">
                <Text as="p" className="text-blue-500 lg:text-sm text-xs tracking-widest uppercase font-medium">{TestimonialTexts.firstText}</Text>
                <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">{TestimonialTexts.secondText}</Text>
                <Text as="h1" className="absolute text-zinc-500/20 md:left-24 lg:left-28 left-20 lg:text-9xl md:text-7xl text-6xl font-extrabold lg:-top-32 md:-top-20 -top-16 -z-10">02</Text>
            </div>
    
            {/* Testimonails */}
            <div className="w-full lg:px-8 md:px-2 h-auto mt-4">
                <Slider {...settings}>
                    {TestimonialTexts.feedBacks.map((feedback, index) => (
                        <div key={index} className="lg:px-6 md:px-4 w-full px-3">
                            <Card className="bg-zinc-800 w-full h-[300px] grid grid-cols-3 border-[0.01rem] border-blue-500/30">
                                {/* Reorganize a ordem para colocar a Image antes do conteúdo de texto */}
                                <Image className="object-cover w-full h-full col-span-3 md:col-span-1" objectCover="object-cover" image={renderClients(index)} alt={feedback.person} />
                                <div className="flex flex-col justify-center md:justify-start gap-1 col-span-3 md:col-span-2 lg:p-8 p-4">
                                    <Text as="h2" className="md:text-xl text-lg font-semibold text-zinc-300">{feedback.person}</Text>
                                    <Text as="h6" className="text-cyan-500 text-sm uppercase">{feedback.type}</Text>
                                    <Text as="p" className="mt-3 text-sm text-zinc-500">
                                        <q>{feedback.text}</q>
                                    </Text>
                                    <div className="flex mt-3 gap-2 items-center text-blue-500">
                                        <Star size={12} color="currentColor" weight="fill" />
                                        <Star size={12} color="currentColor" weight="fill" />
                                        <Star size={12} color="currentColor" weight="fill" />
                                        <Star size={12} color="currentColor" weight="fill" />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </div>

        </main>
    </section>
    
    )
}

export default Testimonials