import React from "react";
import {
  BlogContainer,
  BlogCard,
  BlogImg,
  AnchorTag,
  CardTitle,
  ArticleLink,
  ArticleP,
} from "../Styles-Components/BlogsStyles";

import { AiOutlineArrowRight } from "react-icons/ai";
const Blogs = ({ blogs, profile }) => {
  function toText(node) {
    //move this to utilities later and import from there
    // console.log(node)
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  } //end of toText

  toText();

  function shortText(text, start, len) {
    return text.length > len ? `${text.slice(start, len)}...` : text;
  }

  function allBlogs() {
    if (blogs.items) {
      console.log(blogs.items);
      return (
        blogs.items &&
        blogs.items.map((post, index) => (
          <BlogCard key={index} id="blogs">
            <div className="card-image">
              {<BlogImg src={post.thumbnail} alt="thumbnail"></BlogImg>}{" "}
            </div>
            <div className="card-body">
              <CardTitle>
                <div className="postTitle" rel="noreferrer" target="_blank">
                  {shortText(post.title, 0, 80)} 
                </div>
              </CardTitle>
              {
                <ArticleP className="cardText">
                  {shortText(toText(post.description), 0, 150)}
                </ArticleP>
              }
            </div>
          </BlogCard>
        ))
      );
    }
  }
  allBlogs();

  console.log(blogs.items);
  return (
    <>
      <BlogContainer>
        {blogs.isLoading ? "Loading..." : allBlogs()}
      </BlogContainer>
    </>
  );
};

export default Blogs;

