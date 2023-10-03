import Link from 'next/link';

export const topics = [
    {
        id: 1,
        title: "As a fresher in webMethods Journey",
    },
];

export default function webMethodsJourney() {
    return (
        <div>
            <section className="mt-16">
                <h1 className="text-7xl font-bold">
                    <span className="text-purple-600">webMethods Journey</span>
                </h1>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-16 font-bold text-center">
                {topics.map((topic) => (
                    <Link key={topic.id} href={`/webMethodsJourney/${topic.id}`}>
                        <div
                            key={topic.id}
                            className="cursor-pointer flex flex-col justify-center items-center py-2 w-full md:w-[350px] md:h-[350px] border-2 hover:border-4 border-cyan-50 rounded-2xl hover:border-b-4 hover:border-purple-600 hover:text-purple-600"
                        >

                            <h1 className="md:text-7xl">{topic.id}</h1>

                            <h1 className="mt-16 sm:text-xl md:text-2xl text-white py-2 mx-2">
                                {topic.title}
                            </h1>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}


