type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props {
  buttonType?: "primary" | "link";
  children: React.ReactNode;
  disabled?: ButtonProps["disabled"];
  onClick?: ButtonProps["onClick"];
  type?: ButtonProps["type"];
}

function Button({ type, onClick, children, buttonType, disabled }: Props) {
  const buttonStyle = {
    primary:
      "text-white font-semibold shadow-sm bg-indigo-600 hover:shadow-md hover:bg-indigo-500 focus-visible:outline-indigo-600",
    link: "text-gray-500 bg-transparent hover:bg-gray-50 hover:shadow-sm focus-visible:outline-gray-600",
  }[buttonType ?? "primary"];

  return (
    <button
      /* eslint-disable react/button-has-type */
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${buttonStyle} rounded-md px-3.5 py-2.5 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  buttonType: "primary",
  onClick: () => {},
  disabled: false,
};

export default Button;
