import { motion } from "framer-motion";
import useAnimation from "../../../hooks/useAnimation";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props {
  buttonType?: "primary" | "secondary" | "tertiary" | "link";
  children: React.ReactNode;
  className?: ButtonProps["className"];
  disabled?: ButtonProps["disabled"];
  onClick?: ButtonProps["onClick"];
  type?: ButtonProps["type"];
}

function Button({
  type,
  onClick,
  children,
  buttonType,
  disabled,
  className,
}: Props) {
  const { initial, animate, transition } = useAnimation({ mode: "fast" });
  const buttonStyle = {
    primary:
      "text-white font-semibold shadow-sm bg-indigo-600 hover:shadow-md hover:bg-indigo-500 focus-visible:outline-indigo-600",
    secondary:
      "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
    tertiary:
      "font-semibold text-indigo-600 hover:text-indigo-500 focus-visible:outline-indigo-600 hover:bg-gray-50 hover:shadow-sm",
    link: "text-gray-500 bg-transparent hover:bg-gray-50 hover:shadow-sm focus-visible:outline-gray-600",
  }[buttonType ?? "primary"];

  return (
    <motion.button
      /* eslint-disable react/button-has-type */
      type={type}
      disabled={disabled}
      onClick={onClick}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={{ y: "-2px", rotate: 2 }}
      whileTap={{ y: "-1px", rotate: -2 }}
      className={`${buttonStyle} ${className} rounded-md px-3.5 py-2.5 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </motion.button>
  );
}

Button.defaultProps = {
  type: "button",
  buttonType: "primary",
  onClick: () => {},
  disabled: false,
  className: "",
};

export default Button;
