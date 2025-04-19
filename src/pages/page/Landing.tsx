import Header from '../component/Header';
import About from '../component/About';
import Feature from '../component/Feature';
import Detail from '../component/Detail';
import Feedback from '../component/Feedback';
import Question from '../component/Question';
import Contact from '../component/Contact';
import Footer from '../component/Footer';

const Landing = () => {
    return (
        <>
            <Header />
            <section id="about">
                <About />
            </section>
            <Feature />
            <Detail />
            <Feedback />
            <section id="faq">
                <Question />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </>
    );
};

export default Landing;