import Logo from "./Logo";

function NamedLogo() {
  return (
    <div className="flex content-center justify-center gap-2">
      <Logo />
      <h3 className="mt-2.5 font-sans font-medium text-2xl subpixel-antialiased tracking-wide italic text-center h-min">
        SportBuddy
      </h3>
    </div>
  );
}

export default NamedLogo;
