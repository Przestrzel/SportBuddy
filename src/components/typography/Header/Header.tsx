interface Props {
  children: React.ReactNode;
  className?: string;
  size?: "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs";
}

function Header({ children, className, size }: Props) {
  return (
    <h3
      className={`font-sans antialiased text-slate-800 tracking-wide mb-6 text-${size} font-bold ${className}`}
    >
      {children}
    </h3>
  );
}

Header.defaultProps = {
  className: "",
  size: "xl",
};

export default Header;
