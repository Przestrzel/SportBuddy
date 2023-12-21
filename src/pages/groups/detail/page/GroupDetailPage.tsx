import { useParams } from "react-router-dom";
import PageContainer from "../../../../components/common/PageContainer/PageContainer";

function GroupDetailPage() {
  const { id } = useParams();
  return (
    <PageContainer>
      <h1>Group Detail Page {id}</h1>
    </PageContainer>
  );
}

export default GroupDetailPage;
