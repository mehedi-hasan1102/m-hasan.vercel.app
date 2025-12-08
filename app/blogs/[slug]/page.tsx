
import React from "react";
import { getBlogData, Blog } from "../../../lib/blogs";
import BlogPost from "@/components/blogs/BlogPost"; // client component

export default async function SingleBlogPage({ params }: { params: Promise<{ slug?: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) return <div> Slug not found </div>;

  let blog: Blog | null = null;
  try {
    blog = await getBlogData(slug);
  } catch (err) {
    console.error(err);
  }
  if (!blog) return <div>Blog not found</div>;

  return <BlogPost blog={blog}  />;
}
