import Card from "../../../../components/common/Card/Card";
import PageContainer from "../../../../components/common/PageContainer/PageContainer";

interface Props {
  children: React.ReactNode;
}

function AuthPageContainer({ children }: Props) {
  return (
    <PageContainer>
      <div className="m-auto w-1/3 h-1/2 min-h-min">
        <Card className="max-w-sm min-h-[480px] h-fit">{children}</Card>
      </div>
    </PageContainer>
  );
}

export default AuthPageContainer;
