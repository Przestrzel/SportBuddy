import Logo from "./Logo";

interface Props {
  size?: "small" | "medium";
}

function NamedLogo({ size }: Props) {
  return (
    <div className="flex content-center justify-center gap-2">
      <Logo size={size} />
      <h3 className="mt-2.5 font-sans font-medium text-2xl subpixel-antialiased tracking-wide italic text-center h-min">
        SportBuddy
      </h3>
    </div>
  );
}

NamedLogo.defaultProps = {
  size: "medium",
};

export default NamedLogo;
