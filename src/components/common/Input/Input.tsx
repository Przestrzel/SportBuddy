import { motion } from "framer-motion";
import useAnimation from "../../../hooks/useAnimation";

type InputTypes = React.InputHTMLAttributes<HTMLInputElement>;

type Props = {
  className?: string;
  id: InputTypes["id"];
  onChange?: InputTypes["onChange"];
  placeholder?: InputTypes["placeholder"];
  type: InputTypes["type"] | "text-area";
  value?: InputTypes["value"];
};

function Input({ className, id, type, placeholder, onChange, value }: Props) {
  const { initial, animate, transition } = useAnimation({ mode: "fast" });

  return (
    <motion.input
      initial={initial}
      animate={animate}
      transition={transition}
      type={type}
      id={id}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={`block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${className}`}
    />
  );
}

Input.defaultProps = {
  className: "",
  placeholder: "",
  onChange: () => null,
  value: "",
};

export default Input;
