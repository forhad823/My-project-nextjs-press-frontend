/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { getBlogs } from "../utils/getBlogs";
import { cacheLife } from "next/cache";
import { cacheTag } from "next/cache";

const BlogsPage = async () => {
  /* UI level caching */
  // "use cache";
  // cacheLife("hours");
  /* ****************** */

  // cacheTag("posts")

  const blogs = await getBlogs();

  console.log("blogs", blogs);
  return (
    <>
      <div>
        <h1>Blogs Page</h1>
        {blogs.map((blog: any) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogsPage;
