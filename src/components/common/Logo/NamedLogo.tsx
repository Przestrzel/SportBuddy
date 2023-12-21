import Logo from "../../../assets/icons/Logo";
import Header from "../../typography/Header/Header";

function NamedLogo() {
  return (
    <div className="flex content-center justify-center gap-2">
      <Logo className="w-14 h-14" />
      <Header
        size="2xl"
        className="mt-2.5 font-sans font-medium text-2xl subpixel-antialiased tracking-wide italic text-center h-min"
      >
        SportBuddy
      </Header>
    </div>
  );
}

export default NamedLogo;
