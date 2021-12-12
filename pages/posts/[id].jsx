// export async function getServerSideProps({ params }) {
//   const req = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   );
//   const data = await req.json();

//   return {
//     props: { post: data },
//   };
// }

export async function getStaticProps({ params }) {
  const req = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await req.json();

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const req = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const data = await req.json();

  const paths = data.map((post) => {
    return { params: { id: post.id.toString() } };
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
