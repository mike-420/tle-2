import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <Link href="/article/blog1">
      <article className="shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-w-[390px] rounded-md overflow-hidden">
        <div className="h-[250px] overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            className="absolute inset-0 object-cover"
          />
        </div>
        <div className="p-7 flex flex-col gap-6">
          <h1 className="text-xl font-bold text-black">
            True Paradise on Earth: <br /> Unknown Place
          </h1>
          <p className="text-black">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium,
          </p>
        </div>
      </article>
    </Link>
  );
};

const Blog = ({ noTitle }: { noTitle?: boolean }) => {
  return (
    <div className="flex flex-col gap-[60px] items-center justify-center mt-[130px]">
      {!noTitle && <h1 className="text-[32px] leading-10 text-black">Blog</h1>}
      <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-center lg:grid lg:grid-cols-3 gap-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
