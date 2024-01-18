import { useFormContext, useWatch } from "react-hook-form";
import PageContainer from "../../../components/common/PageContainer/PageContainer";
import {
  SearchForm,
  SearchProvider,
} from "../../../components/common/Search/Search";
import GroupGrid from "../grid/GroupGrid";
import GroupHeader from "../header/GroupHeader";
import useSearch from "../../../hooks/useSearch";
import { useGroupsQuery } from "../../../store/services/groups.services";

function GroupPage() {
  const { control } = useFormContext<SearchForm>();
  const values = useWatch({ control });
  const { data: groups } = useGroupsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data ?? [],
    }),
  });
  const { data } = useSearch({
    search: values.search!,
    data: groups,
    fields: ["name", "description"],
  });

  return (
    <PageContainer className="p-12 pt-4 w-full h-full flex flex-col gap-8">
      <GroupHeader />
      <GroupGrid groups={data} />
    </PageContainer>
  );
}

function Wrapper() {
  return (
    <SearchProvider>
      <GroupPage />
    </SearchProvider>
  );
}

export default Wrapper;
