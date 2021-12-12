import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  setTimeout(() => {
    router.back();
  }, 3000);

  return (
    <>
      <h1>Page Not Found</h1>
      <h3>back to previous page in 3 seconds</h3>

      <button onClick={() => router.push("/")}>go back home</button>
    </>
  );
};

export default NotFound;
