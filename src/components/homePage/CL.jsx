// import Home from "../../pages/home";
import PageLayout from "../../layout/layout";
import League from "./League";
import Categories from "./Categories";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="animate__animated animate__faster animate__fadeIn">
        <Categories />

        <div className="pb-6">
          <League />
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;
