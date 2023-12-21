import Calendar from "../../../components/common/Calendar/Calendar";
import Card from "../../../components/common/Card/Card";
import PageContainer from "../../../components/common/PageContainer/PageContainer";

function HomePage() {
  return (
    <PageContainer className="pt-8 pb-8">
      <Card>
        <Calendar />
      </Card>
    </PageContainer>
  );
}

export default HomePage;
