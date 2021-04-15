import Link from "next/link";
export default function Navbar() {
  return (
  <div className="bg-purple-400 px-8 py-6 text-white  shadow-sm grid space-y-4 justify-items-center sm:flex sm:justify-between">
        <div className="text-3xl font-mono mt-2">Logo</div>
        <div className="flex space-x-4 text-2xl font-mono align-middle">
          <Link href="">
            <a className="link">Home</a>
          </Link>
          <Link href="">
            <a className="link">Blog</a>
          </Link>
          <Link href="">
            <a className="link">Projects</a>
          </Link>
          <Link href="">
            <a className="link">Connect</a>
          </Link>
        </div>
    </div>
  )
}
