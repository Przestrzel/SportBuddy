import Logo from "../../../assets/icons/Logo";

function NamedLogo() {
  return (
    <div className="flex content-center justify-center gap-2">
      <Logo className="w-14 h-14" />
      <h3 className="mt-2.5 font-sans font-medium text-2xl subpixel-antialiased tracking-wide italic text-center h-min">
        SportBuddy
      </h3>
    </div>
  );
}

export default NamedLogo;
