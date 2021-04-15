// import moment from "moment";
import marked from "marked";
import Link from "next/link";
export default function Blog({ innerContent }) {
  return (
    // <div className="flex sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3">
    <Link href={"/" + innerContent.fields.slug}>
      <div className="h-1/4">
        <div className="border-2 border-purple-400 mx-16 my-8 p-4 rounded-md transform duration-500 hover:scale-110  shadow-md ">
          <div>
            <div className=" text-xl text-purple-300">
              {innerContent.fields.title}
            </div>

            <div className="author text-purple-600 text-xs mt-2">
              <span className="text-gray-400">By</span> Ritik N{" "}
              <span className="text-gray-400">
                {innerContent.sys.createdAt.slice(0, 10)}
              </span>
            </div>
            <div
              className="text-lg truncate h-1/3"
              dangerouslySetInnerHTML={{
                __html: marked(innerContent.fields.slug),
              }}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
}
