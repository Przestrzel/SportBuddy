type InputTypes = React.InputHTMLAttributes<HTMLInputElement>;

type Props = {
  className?: string;
  id: InputTypes["id"];
  placeholder?: InputTypes["placeholder"];
  type: InputTypes["type"];
};

function Input({ className, id, type, placeholder }: Props) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={`block w-full rounded-md border-0 py-1.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
    />
  );
}

Input.defaultProps = {
  className: "",
  placeholder: "",
};

export default Input;
