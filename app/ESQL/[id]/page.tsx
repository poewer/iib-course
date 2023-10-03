import { topics } from "../page";

type Params = {
  params: {
    id: number;
  };
};

export default function ESQLIdPages({ params: { id } }: Params) {
    // Znajdź temat o danym id
    const topic = topics.find((topic) => topic.id === Number(id));
    // Jeżeli temat o danym id nie istnieje, wyświetl komunikat
    if (!topic) {
      return <h1>Temat o id {id} nie istnieje.</h1>;
    }
  
    // Jeżeli temat istnieje, wyświetl jego treść
    return (
      <div>
        <h1>{topic.id}</h1>
        <p>{topic.title}</p>
      </div>
    );
  }
  