interface Props {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className }: Props) {
  return (
    <div
      className={`bg-white shadow-lg rounded-md px-8 pt-6 pb-8 mb-4 h-full w-full ${className}`}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  className: "",
};

export default Card;
