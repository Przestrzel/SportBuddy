interface Props {
  children: React.ReactNode;
}

function Card({ children }: Props) {
  return (
    <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 h-full w-full">
      {children}
    </div>
  );
}

export default Card;
