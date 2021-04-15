import { createClient } from "contentful";
// import Navbar from "../Components/Navbar";
import Blog from "../Components/Blogs";
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries({
    content_type: "blog",
  });
  return {
    props: {
      blogs : res.items
    }
  }
}

export default function Home({
  blogs
}) {
  // console.log(blogs);
  return <div className="w-full max-h-10 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
    {/* <Navbar/> */}
    {blogs.map(blog => (
      <div className="h-1/4" style={{height : "20vh"}} key={blog.fields.slug}>
        <Blog innerContent={blog}/>
      </div>
    ))}
    
  </div>;
}
