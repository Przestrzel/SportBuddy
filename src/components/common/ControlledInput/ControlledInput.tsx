import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Label from "../Label/Label";
import Input from "../Input/Input";

type InputTypes = React.InputHTMLAttributes<HTMLInputElement>;

interface Props<T extends FieldValues> {
  control: Control<T, unknown>;
  label: string;
  name: Path<T>;
  type: InputTypes["type"];
}

function ControlledInput<T extends FieldValues>({
  control,
  name,
  label,
  type,
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <>
          <Label htmlFor={name}>{label}</Label>
          <Input value={value} onChange={onChange} id={name} type={type} />
        </>
      )}
    />
  );
}

export default ControlledInput;
