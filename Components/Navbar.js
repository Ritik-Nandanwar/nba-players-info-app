import Link from "next/link";
export default function Navbar() {
  return (
    <div className="bg-purple-400 px-8 py-6 text-white  shadow-sm grid space-y-4 justify-items-center sm:flex sm:justify-between">
      <div className="class="text-3xl font-mono mt-2 text-center">
        <Link href="/">
          <a>Logo</a>
        </Link>
      </div>
      <div className="flex space-x-3 text-xl font-mono align-middle py-2 mx-auto">
        <Link href="/">
          <a className="link">Home</a>
        </Link>
        <Link href="/blog">
          <a className="link">Blog</a>
        </Link>
        <Link href="/projects">
          <a className="link">Projects</a>
        </Link>
        <Link href="">
          <a className="link">Connect</a>
        </Link>
      </div>
    </div>
  );
}
