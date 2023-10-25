interface Props {
  children: React.ReactNode;
}

function Header({ children }: Props) {
  return <h3 className="mb-6 text-3xl font-bold">{children}</h3>;
}

export default Header;
