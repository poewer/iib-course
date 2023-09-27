'use client'
import AccordionDemo from "./AccordionDemo";


const About = () => {
    return (
        <div>
            <section className="mt-16">
                <h1 className="text-7xl font-bold">HI I&apos;m <span className="text-purple-600">Michał</span></h1>
                <h3 className="text-4xl my-3">I&apos;m IIB Developer</h3>
                <p className="text-gray-600 mb-8">Currently, I&apos;m working with IBM Integration Bus (IIB) and IBM App Connect Enterprise Toolkit,
                    <br />focusing on the creation and maintenance of integrated systems using REST API, SOAP, YAML configuration files, and XML.
                </p>
            </section>
            <div className="mt-16">
                <AccordionDemo />
            </div>

        </div>
    );
};

export default About;

