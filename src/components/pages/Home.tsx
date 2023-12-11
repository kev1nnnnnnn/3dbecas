import About from "../organs/About"

import Contact from "../organs/Contact"
import HeroSection from "../organs/HeroSection"
import Arrecad from "../organs/Arrecad"


import Testimonials from "../organs/Testimonials"


const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <Arrecad />
            {/* <Offers />
            <Membership /> */}
            {/* <Calculator /> */}
            <Testimonials />
            {/* <Blogs /> */}
            <Contact />
        </>
    )
}

export default Home