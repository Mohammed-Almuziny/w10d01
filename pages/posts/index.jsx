import Link from "next/link";
import styles from "./../../styles/Posts.module.css";

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

const Posts = ({ data }) => {
  return (
    <>
      <h1 className={styles.title}>Posts</h1>

      {data.map((item) => (
        <Link href={`/posts/${item.id}`} key={item.id}>
          <div className={styles.postsDiv}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Posts;
