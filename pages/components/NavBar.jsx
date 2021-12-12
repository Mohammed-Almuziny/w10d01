import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <li>home</li>
      </Link>
      <Link href="/about">
        <li>about</li>
      </Link>
      <Link href="/contact">
        <li>contact</li>
      </Link>
      <Link href="/posts">
        <li>posts</li>
      </Link>
    </nav>
  );
};

export default NavBar;
