import { Image } from "../atoms/Image"
import ContactImg from "../../assets/patrocinios/contact.jpg"
import { Text } from "../atoms/Text"
import { ContactTexts } from "../particles/Data"

const Contact = () => {
    return (
        <section className="w-full md:h-[400px] h-[500px] relative">
            <Image alt="Contact Image" className="w-full h-full" objectCover="object-cover object-top" image={ContactImg} />
            <div className="w-full h-full absolute top-0 left-0  from-blue-500 to-cyan-500/70 flex flex-col justify-center items-center gap-2">
                <Text as="p" className="tracking-widest text-amber-500 uppercase md:text-sm text-xs font-medium">
                    {ContactTexts.firstText}
                </Text>
                <Text as="h1" className="lg:text-5xl md:text-4xl text-3xl text-zinc-100">
                    {ContactTexts.phone}
                </Text>
                <Text as="p" className="text-zinc-100 md:w-1/2 w-4/5 text-center text-lg my-6">
                    {ContactTexts.paragraph}
                </Text>
                <a href="https://wa.me/5592984454069?text=Ol%C3%A1%21" target="_blank" className="px-10 font-medium text-white py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 whitespace-nowrap" type="button">
                    {ContactTexts.button}
                </a>
            </div>
        </section>

    )
}

export default Contact