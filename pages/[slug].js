import { createClient } from "contentful";
import Image from "next/image";
import marked from 'marked';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blog",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  // console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });
  // console.log();
  return {
    props: { blog: items[0] },
  };
};

export default function blog({ blog }) {
    // console.log(blog);
  return (
    <div className="h-1/4 ">
        <div className="border-2 border-purple-500 mx-16 my-8 p-4 rounded-md bg-purple-100  shadow-md ">
             {/* <img src={"https:"+ blog.fields.featuredImage.fields.file.details.image.url} 
            width={blog.fields.featuredImage.fields.file.details.image.width}
            height={blog.fields.featuredImage.fields.file.details.image.height}
            >
                
            </img>  */}
            <img src={ "https:" + blog.fields.thumbnail.fields.file.url} 

            alt="Thumb image"

            width={blog.fields.thumbnail.fields.file.details.image.width}

            height={blog.fields.thumbnail.fields.file.details.image.height}/>
          <div>
            <div className=" text-xl text-purple-600">
              {blog.fields.title}
            </div>

            <div className="author flex text-purple-600 text-xs mt-2 align-middle font-mono space-x-4">
              <span className="text-gray-700">By</span><div className="text-xl text-purple-600 "> Ritik N</div>{" "}
              <span className="text-gray-700">
                {blog.sys.createdAt.slice(0, 10)}
              </span>
            </div>
            <div
              className="text-lg truncate h-1/3"
              dangerouslySetInnerHTML={{
                __html: marked(blog.fields.body),
              }}
            ></div>
          </div>
        </div>
      </div>
  );
}
