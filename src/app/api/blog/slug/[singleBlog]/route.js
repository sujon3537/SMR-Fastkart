import { NextResponse } from "next/server";
import blogData from "../../blog.json";
export async function GET(_, { params }) {
  // const singleBlog = await params.singleBlog;
  const { singleBlog } = await params;

  const blogObj = blogData.data?.find((elem) => elem?.slug == singleBlog);

  return NextResponse.json(blogObj);
}
