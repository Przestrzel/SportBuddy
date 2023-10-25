interface Props {
  children: React.ReactNode;
  className?: string;
}

function Header({ children, className }: Props) {
  return (
    <h3
      className={`font-sans antialiased text-slate-800 tracking-wide mb-6 text-3xl font-bold uppercase ${className}`}
    >
      {children}
    </h3>
  );
}

Header.defaultProps = {
  className: "",
};

export default Header;
