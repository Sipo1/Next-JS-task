import Link from "next/link";
import styles from "../../styles/Posts.module.css";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

const Posts = ({ posts }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}> Posts List </h1>
      <ul className={styles.data}>
        {posts.map(({ id, title }) => {
          return (
            <li key={id} >
              <Link  href={`/posts/${id}`}><p className = {styles.posts}>{title}</p></Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
