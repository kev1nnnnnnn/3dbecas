import About from "../organs/About"

import Contact from "../organs/Contact"
import HeroSection from "../organs/HeroSection"
import Arrecad from "../organs/Arrecad"

import Testimonials from "../organs/Testimonials"
import Blogs from "../organs/Blogs"
import Offers from "../organs/Offers"
import { Audio } from "../atoms/Audio"


const Home = () => {
    return (
        <>
            <HeroSection />
            <Audio />
            <Offers />
            <Arrecad />
            {/* <Membership /> 
             <Calculator /> */}
            <Testimonials />
             <About />
            <Blogs />
            <Contact />
            
        </>
    )
}

export default Home