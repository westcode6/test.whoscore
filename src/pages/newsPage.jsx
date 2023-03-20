import PageLayout from "../layout/layout";
// import News from "../components/newsPage/News";
// import { NEWS } from "../components/newsPage/news";
import ExploreComingSoon from "../components/newsPage/exploreComingSoon";

const NewsPage = () => {
  return (
    <PageLayout>
      {/* <section className="mt-24 px-4">
        <div className="flex justify-between">
          <a href="##" className="border-b-2 pb-1 border-black font-semibold">
            All
          </a>

          <a
            href="##"
            className="hover:border-b-2 border-black hover:font-semibold"
          >
            Trending
          </a>

          <a
            href="##"
            className="hover:border-b-2 border-black hover:font-semibold"
          >
            Latest
          </a>
        </div>

        <div className="mt-8 pb-24">
          {NEWS.map(({ image, title, desc, tag, time }, index) => (
            <News
              key={index}
              image={image}
              title={title}
              desc={desc}
              tag={tag}
              time={time}
            />
          ))}
        </div>
      </section> */}
      <ExploreComingSoon />
    </PageLayout>
  );
};

export default NewsPage;
