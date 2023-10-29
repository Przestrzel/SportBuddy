type InputTypes = React.InputHTMLAttributes<HTMLInputElement>;

type Props = {
  className?: string;
  id: InputTypes["id"];
  onChange?: InputTypes["onChange"];
  placeholder?: InputTypes["placeholder"];
  type: InputTypes["type"];
  value?: InputTypes["value"];
};

function Input({ className, id, type, placeholder, onChange, value }: Props) {
  return (
    <input
      type={type}
      id={id}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={`block w-full rounded-md border-0 py-1.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all ${className}`}
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
