import PageContainer from "../../components/PageContainer";
import Header from "./components/Header";
import PreviousParties from "./components/PreviousParties";
import UpcomingPartiesCard from "./components/UpcomingPartiesCard";

const Home = () => {
  return (
    <PageContainer>
      <Header />
      <UpcomingPartiesCard />
      <PreviousParties />
    </PageContainer>
  );
};

export default Home;
