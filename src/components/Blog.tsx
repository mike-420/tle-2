import { Source_Sans_3 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BlogCard = () => {
  return (
    <Link href="/article/blog1">
      <article className=" shadow-md max-w-[390px] rounded-md overflow-hidden">
        <div className="h-[250px] overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="blog post image"
            width={400}
            height={300}
            className="absolute inset-0 object-cover"
          />
        </div>
        <div className="p-[14px] flex flex-col gap-6">
          <h1 className="text-xl font-bold text-black">
            True Paradise on Earth: <br /> Unknown Place
          </h1>
          <p className={` ${SourceSans.className} text-black`}>
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
    <section className="md:px-16 py-16 flex flex-col items-center justify-center px-4 sm:px-12  max-sm:py-12 ">
      {!noTitle && (
        <h1
          className={`text-[32px] max-sm:mt-[6px] max-sm:text-[28px] font-semibold leading-10 text-black ${SourceSans.className}`}
        >
          My Blog
        </h1>
      )}
      <div className="max-w-[1240px] mt-16 max-sm:mt-12 mx-auto flex flex-wrap items-center justify-center lg:grid lg:grid-cols-3 gap-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default Blog;
