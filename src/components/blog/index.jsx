import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { allBlogs, Blog } from 'contentlayer/generated'

const FeaturedBlogs = () => {
  const blogs = allBlogs.slice(0, 3) // we could run the filter or sort logic here if needed
  return (
    <section
      id="blog"
      className="bg-gray-light py-8 md:py-10 lg:py-14 flex justify-center px-4 lg:px-12"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog.title} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
