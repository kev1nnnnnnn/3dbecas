import { Text } from "../atoms/Text"
import { Card } from "../molecules/Card"
import { BlogTexts } from "../particles/Data"
import grafiti from "../../assets/images/grafiti.jpg";
import poesia from "../../assets/images/poesia.jpg"
import Image3 from "../../assets/gym/12.jpeg"
import { useCallback } from "react";
import { Image } from "../atoms/Image";
import { Link } from "react-router-dom";



const Blogs = () => {

    const renderImage = useCallback((element: number) => {
        switch (element) {
            case 0:
                return grafiti;
            case 1:
                return poesia;
            case 2:
                return Image3;
            default:
                return "";
        }
    }, [])

    return (
        <section className="w-full h-auto flex items-center bg-zinc-900">
            <main className="w-full lg:h-[900px] md:h-[800px] flex flex-col justify-center items-center gap-20 lg:gap-28 py-12 md:py-0">

            <div className="flex flex-col mt-10 items-center relative before:absolute before:-bottom-6 before:left-30 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-blue-500 before:to-cyan-500 z-10">
                    <Text as="p" className="text-blue-500 lg:text-sm text-xs tracking-widest uppercase font-medium">{BlogTexts.firstText}</Text>
                    <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">{BlogTexts.secondText}</Text>
                    <Text as="h1" className="absolute text-zinc-500/20 lg:left-24 left-20 lg:text-9xl md:text-7xl text-6xl font-extrabold lg:-top-32 md:-top-20 -top-16 -z-10">04</Text>
                </div>

                {/* Blog News */}
                <div className="w-full lg:w-3/4 grid md:grid-cols-3 lg:gap-8 md:gap-5 gap-8 px-6 md:px-4 lg:px-0">
                    {
                        BlogTexts.blogNews.map((blog, index) => (
                            <Card key={index} className="flex flex-col justify-between bg-zinc-950 border-b-4 border-blue-500">
                                <Image alt={blog.title} className="w-full h-48" objectCover="object-cover" image={renderImage(index)} />
                                <Link to="/" className="flex flex-col lg:p-6 md:p-4 p-6 gap-2 group">
                                    <Text as="h3" className="text-blue-500 text-xs group-hover:underline font-semibold uppercase">{blog.caption}</Text>
                                    <Text as="h1" className="text-zinc-300 group-hover:underline text-base capitalize">{blog.title}</Text>
                                    <Text as="p" className="text-zinc-400 text-sm">{blog.paragraph.slice(0, 155) + '...'}</Text>

                                </Link>
                                <div className="flex justify-start lg:px-6 md:px-4 px-2 pb-6 items-center">
                                    <aside className="flex items-center gap-2">
                                        <a href={blog.link} target="_blank" className="px-10 font-medium text-white py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 whitespace-nowrap" type="button">
                                        {blog.Button}
                                        </a>
                                    </aside>
                                  
                                </div>
                            </Card>
                        ))
                    }

                </div>

            </main>

        </section>
    )
}

export default Blogs