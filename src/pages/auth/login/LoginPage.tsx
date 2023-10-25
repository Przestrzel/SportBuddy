import Card from "../../../components/common/Card/Card";
import Header from "../../../components/typography/Header/Header";

function LoginPage() {
  return (
    <section className="container w-full h-full flex">
      <div className="m-auto w-1/3 h-1/2">
        <Card>
          <form className="w-full max-w-lg">
            <Header>Login</Header>
          </form>
        </Card>
      </div>
    </section>
  );
}

export default LoginPage;
