import { createClient } from "contentful";
// import Navbar from "../Components/Navbar";
import Blog from "../Components/Blogs";
import Image from "next/image";
// import img from '../Components/landingImg.jpg';
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries({
    content_type: "blog",
  });
  console.log(res);
  return {
    props: {
      blogs: res.items,
    },
  };
}

export default function Home({ blogs }) {
  console.log(blogs);
  // return <div className="w-full max-h-10 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
  //   {/* <Navbar/> */}
  //   {blogs.map(blog => (
  //     <div className="h-1/4" style={{height : "20vh"}} key={blog.fields.slug}>
  //       <Blog innerContent={blog}/>
  //     </div>
  //   ))}
  return (
    <>
      <div className="bg-purple-100  border border-purple-300  ">
        <div className="flex-none justify-between sm:px-6 md:px-24  md:flex max-w-6xl mx-auto">
          <div className=" flex flex-col justify-between align-middle px-6  pt-24">
            <div className="flex flex-col">
              <span className="text-3xl font-mono flex-1 py-4">
                Hello , Ritik here
              </span>
              <span className="text-xl font-mono max-w-2xl">
                I am 3rd yr. engineering student , started web development as a
                hobby and now trying to make a possible future out of it .
              </span>
            </div>

            <div className="grid py-12 grid-cols-3 max-w-xl">
              <a href="https://github.com/Ritik-Nandanwar" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon  icon-tabler icon-tabler-brand-github"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#b794f4"
                  fill="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
              <a href="https://twitter.com/_Ritik_10" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-twitter"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#b794f4"
                  fill="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/nandanwar_ritik10/" taraget="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-instagram"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#b794f4"
                  fill="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
              </a>
            </div>
          </div>{" "}
          <div className="pt-12 mx-6 ">
            <Image
              src="/land.jpg"
              alt="Picture of the author"
              className=" rounded-full"
              height={320}
              width={320}
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
