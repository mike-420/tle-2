"use client";
import React, { useEffect, useState } from "react";

const BlogPage = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "http://loftexchange.rf.gd/wp-json/wp/v2/posts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            // body: JSON.stringify({
            //   query: `
            //         query NewQuery {
            //           posts {
            //             nodes {
            //               title
            //             }
            //           }
            //         }
            //       `,
            // }),
          }
        );

        const responseData = await response.json();
        console.log(responseData);
        setPosts(responseData);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this effect runs once, like componentDidMount

  console.log(posts);

  return <div>BlogPage</div>;
};

export default BlogPage;
