import Link from 'next/link';

const topics = [
    {
        id: 1,
        title: "Introduction, Data types and variable declaration",
    },
    {
        id: 2,
        title: "Reading Input and Sending Output",
    },
    {
        id: 3,
        title: "Conditional Statements",
    },
    {
        id: 4,
        title: "Comparison Operators",
    },
    {
        id: 5,
        title: "Logical Operators",
    },
    {
        id: 6,
        title: "String Operators",
    },
    {
        id: 7,
        title: "Looping Statements",
    },
    {
        id: 8,
        title: "DETACH and ATTACH statements",
    },
    {
        id: 9,
        title: "Casting, String Concatenation and COALESCE function",
    },
    {
        id: 10,
        title: "Different ways of using CREATE statement",
    },
    {
        id: 11,
        title: "Assigning NULL Value",
    },
    {
        id: 12,
        title: "XML attributes, namespaces, FIELDVALUE and FIELDNAME functions",
    },
    {
        id: 13,
        title: "Using SELECT query on a tree",
    },
    {
        id: 14,
        title: "Different ways of propagating a message",
    },
    {
        id: 15,
        title: "Database Interaction (ODBC Connectivity)",
    },
    {
        id: 16,
        title: "User defined Functions and Procedures",
    },
    {
        id: 17,
        title: "Subflows, libraries, environment and local environment",
    },
    {
        id: 18,
        title: "Normal,External and shared variables",
    },
];

export default function ESQL() {
    return (
        <div>
            <section className="mt-16">
                <h1 className="text-7xl font-bold">
                    <span className="text-purple-600">ESQL</span>
                </h1>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-16 font-bold text-center">
                {topics.map((topic) => (
                    <Link key={topic.id} href={`/${topic.id}`}>
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


