import LogoIcon from "../../../assets/logo.svg";

interface Props {
  size?: "small" | "medium";
}

function Logo({ size }: Props) {
  const getSize = () => {
    if (size === "small") return 12;
    return 16;
  };

  const intSize = getSize();
  return (
    <img src={LogoIcon} alt="logo" className={`w-${intSize} h-${intSize}`} />
  );
}

Logo.defaultProps = {
  size: "small",
};

export default Logo;
