"use client";

import React, { useState, useEffect } from "react";
import { BackgroundBeamsWithCollision } from "../ui/BackgroundBeams";
import { HoverEffectCards } from "../ui/HoverEffectCards";

function NewBlogsSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Replace the URL below with your Django API endpoint
        const response = await fetch("http://127.0.0.1:8000/blogs/famus-blogs/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <BackgroundBeamsWithCollision className="mt-20 mb-22">
      <div className="flex justify-evenly items-center flex-col gap-12">
        <h3 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight mt-12">
          What&apos;s{" "}
          <span className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-Primary via-sky-300 to-blue-700">
            cooler
          </span>{" "}
          than reading{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-Primary via-sky-300 to-blue-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span>Tech blogs?</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-Primary via-sky-300 to-blue-700 py-4">
              <span>Tech blogs?</span>
            </div>
          </div>
        </h3>
        <div className="flex flex-wrap justify-between items-baseline gap-x-6 gap-y-2">
          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-center text-red-500">Error fetching blog data.</p>}
          {!loading && blogs.length === 0 && <p className="text-center">No blogs found.</p>}
          {!loading && blogs.length > 0 && <HoverEffectCards items={blogs} />}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default NewBlogsSection;
