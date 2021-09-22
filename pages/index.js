import NewsCard from "../components/NewsCard";

function Home({ articles }) {
  if (articles.status === "error")
    return <h3 className="error-message">Oops! An error occured</h3>;
  const { results } = articles;
  return (
    <div className="wrapper">
      {results.map(
        ({
          title,
          link,
          description,
          pubDate,
          creator,
          keywords,
          source_id,
        }) => (
          <NewsCard
            content={{
              title,
              link,
              description: description.replace(/Read More/g,''),
              pubDate,
              creator,
              keywords,
              source_id,
            }}
          />
        )
      )}
    </div>
  );
}

export const getStaticProps = async () => {
  const getArticles = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&country=ng`
  );
  const articles = await getArticles.json();

  return {
    props: {
      articles,
    },
  };
};

export default Home;
