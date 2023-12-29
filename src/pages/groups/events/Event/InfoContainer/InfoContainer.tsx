interface Props {
  children: React.ReactNode;
  text: string;
}

function InfoContainer({ children, text }: Props) {
  return (
    <div className="flex gap-2 items-center text-sm text-stone-500">
      {children}
      <p>{text}</p>
    </div>
  );
}

export default InfoContainer;
