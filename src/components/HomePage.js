import React, { useEffect, useState } from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import useDocumentTitle from "../hooks/useDocumentTitle";

function HomePage() {
  // fetch data for posts
  const [data: posts, isLoaded] = useQuery("http://localhost:4000/posts");

  useEffect(() => {
    setIsLoaded(false);
    fetch("http://localhost:4000/posts")
      .then((r) => r.json())
      .then((posts) => {
        setPosts(posts);
        setIsLoaded(true);
      });
  }, []);

  // set the document title
  useDocumentTitle("Underracted | Home")
  useEffect(() => {
    document.title = "Underreacted | Home";
  }, []);

  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={posts} /> : <h3 id="load">Loading...</h3>}
    </>
  );
}

export default HomePage;
