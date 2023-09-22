import AccordionDemo from "./AccordionDemo";

const About = () => {
    return (<>
        <section className="mt-16">
            <h1 className="text-7xl font-bold">HI I&apos;m <span className="text-purple-600">Michał</span></h1>
            <h3 className="text-4xl my-3">I&apos;m IIB Developer</h3>
            <p className="text-gray-600 mb-8">Currently, I&apos;m working with IBM Integration Bus (IIB) and IBM App Connect Enterprise Toolkit,
                <br />focusing on the creation and maintenance of integrated systems using REST API, SOAP, YAML configuration files, and XML.
            </p>
        </section>
        <div className="flex justify-center items-center mt-48">
    {/* Kontener dla obracającego się diva, statycznego napisu i nowego diva */}
    <div className="relative w-96 h-96">
        {/* Obracający się div */}
        <div className="absolute top-0 left-0 w-full h-full animate-spin">
            {/* Koła w rogach */}
            <div className="absolute top-0 left-0 w-24 h-24 rounded-full flex justify-center items-center animate-spin-reverse">
                <span className="text-2xl">REST API</span>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full flex justify-center items-center animate-spin-reverse">
                <span className="text-2xl">MQ</span>
            </div>
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full flex justify-center items-center animate-spin-reverse">
                <span className="text-2xl">SOAP</span>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full flex justify-center items-center animate-spin-reverse">
                <span>HTTP/S</span>
            </div>
        </div>
        {/* Statyczny napis ESB */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <span className="text-7xl font-bold">ESB</span>
        </div>
    </div>
</div>
        <div className="mt-16">
        <AccordionDemo />
        </div>
        
    </>
    );
};

export default About;

