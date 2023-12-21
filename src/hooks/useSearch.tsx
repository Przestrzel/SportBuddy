import { useMemo } from "react";

interface Props<T, K> {
  data: T[];
  fields: K[];
  search: string;
}

function useSearch<T extends object, K extends keyof T>({
  search,
  data,
  fields,
}: Props<T, K>) {
  const filterItem = (item: T) => {
    const values = fields.map((field) => item[field]);
    const searchTags = search.split(" ");
    const found = searchTags.some((tag) =>
      values.some((value) => {
        if (typeof value === "string") {
          return value.toLowerCase().includes(tag.toLowerCase());
        }
        return false;
      }),
    );
    return found;
  };

  const filteredData = useMemo(() => data.filter(filterItem), [data, search]);
  return { data: filteredData };
}

export default useSearch;
