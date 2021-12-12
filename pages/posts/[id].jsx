// export async function getServerSideProps({ params }) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   );
//   const data = await res.json();

//   return {
//     props: { post: data },
//   };
// }

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await res.json();

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

const Post = ({ post }) => {
  console.log(post);
  return (
    <>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </>
  );
};

export default Post;
