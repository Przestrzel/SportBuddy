interface Props {
  children: React.ReactNode;
  htmlFor: string;
}

function Label({ htmlFor, children }: Props) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-xs font-medium tracking-small uppercase leading-7 text-gray-600"
    >
      {children}
    </label>
  );
}

export default Label;
