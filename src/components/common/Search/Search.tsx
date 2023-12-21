import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import Input from "../Input/Input";

interface ProviderProps {
  children: React.ReactNode;
}

export interface SearchForm {
  search: string;
}

export function SearchProvider({ children }: ProviderProps) {
  const methods = useForm<SearchForm>({
    defaultValues: {
      search: "",
    },
  });
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <FormProvider {...methods}>{children}</FormProvider>;
}

interface SearchProps {
  className?: string;
}

function Search({ className }: SearchProps) {
  const { control } = useFormContext<SearchForm>();
  return (
    <Controller
      control={control}
      name="search"
      render={({ field }) => (
        <Input
          className={className}
          value={field.value}
          onChange={field.onChange}
          placeholder="Search"
          id="search"
          type="text"
        />
      )}
    />
  );
}

Search.defaultProps = {
  className: "",
};

export default Search;
