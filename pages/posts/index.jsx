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
      {data.map((item) => (
        <Link href={`/posts/${item.id}`}>
          <div className={styles.pointer} key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Posts;
