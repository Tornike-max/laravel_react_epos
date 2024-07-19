const Prototypes = ({
  cards,
}: {
  cards: {
    url: string;
    title: string;
    id: number;
  }[];
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card) => (
        <div key={card.id} className="relative overflow-hidden rounded-lg">
          <img
            className="object-cover w-full h-auto rounded-lg transition-transform transform hover:scale-105"
            src={card.url}
            alt={card.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Prototypes;
