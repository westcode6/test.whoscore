import PageLayout from "../layout/layout";
// import News from "../components/newsPage/News";
// import { NEWS } from "../components/newsPage/news";
import ExploreComingSoon from "../components/newsPage/exploreComingSoon";
import NewsPanel from "../components/newsPage/NewsPanel";

const NewsPage = () => {
  return (
    <PageLayout>
<div className="md:hidden">
<NewsPanel />
</div>
    <div className="hidden md:block">
    <ExploreComingSoon />
    </div>
    </PageLayout>
  );
};

export default NewsPage;
