import styles from "../styles/Posts.module.css";

const PostInfo = ({ post }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postTitle}>
        <h1>Title</h1>
        <h3>{post.title}</h3>
      </div>
      <div className={styles.postBody}>
        <h1> Description</h1>
        <h3>{post.body}</h3>
      </div>
    </div>
  );
};

export default PostInfo;
