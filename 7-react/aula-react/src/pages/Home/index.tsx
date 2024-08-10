import ContentHeader from "../../components/ContentHeader";
import { useUser } from "../../hooks/userProvider";

const Home = () => {
  const { qtdUsers } = useUser();

  return (
    <div>
      <ContentHeader title="Home" subtitle={`Qtd usuários: ${qtdUsers}`} />
    </div>
  );
};

export default Home;
