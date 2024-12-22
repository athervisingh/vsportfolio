import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <h3>
        Recent Posts from{' '}
        <a
          href="https://dev.to/itsnitinr"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          dev.to
        </a>
      </h3>
      <div className={styles.container}>
        {Array.isArray(articles) && articles.length > 0 ? (
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <p>No articles available.</p>
        )}
      </div>
    </>
  );
};

export async function getStaticProps() {
  let articles = [];

  try {
    const res = await fetch(
      'https://dev.to/api/articles/me/published?per_page=6',
      {
        headers: {
          'api-key': process.env.DEV_TO_API_KEY,
        },
      }
    );

    const data = await res.json();

    // Check if data is an array
    if (Array.isArray(data)) {
      articles = data;
    } else {
      console.error('API response is not an array', data);
    }
  } catch (error) {
    console.error('Failed to fetch articles:', error);
  }

  return {
    props: { title: 'Articles', articles },
    revalidate: 60,
  };
}

export default ArticlesPage;
