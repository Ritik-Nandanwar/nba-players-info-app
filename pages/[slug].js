import { createClient } from "contentful";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

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
  console.log(paths);
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
  console.log();
  return {
    props: { blog: items[0] },
  };
};

export default function RecipeDetails({ blog }) {
  //   const { featuredImage, title, cookingTime, ingredients, method } = recipe.fields
  //   console.log(method)

  return (
    <div>
      <h1>
          {blog.fields.title}
      </h1>
    </div>
  );
}
