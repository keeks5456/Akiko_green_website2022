import React from "react";
import Navbar from "./Navbar";
import {
  BlogContainer,
  BlogCard,
  BlogImg,
  AnchorTag,
  CardTitle,
} from "../Styles-Components/BlogsStyles";
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
    if(blogs.items) {
      console.log(blogs.items);
      return (
        blogs.items &&
        blogs.items.map((post, index) => (
          <BlogCard key={index}>
            <div className="card-image">
            <div className="authorImg">
            <a
            href={profile.profileUrl}
            rel="noopener noreferrer"
            target="_blank"
            aria-hidden="true"
            ></a>
            </div>
            </div>
            <div className="card-body">
            <CardTitle>
            <AnchorTag
            href={post.link}
            className="postTitle"
            rel="noreferrer"
            target="_blank"
            >
            {shortText(post.title, 0, 80)}
            </AnchorTag>
            </CardTitle>
            <BlogImg src={post.thumbnail} alt="thumbnail"></BlogImg>
              <p className="cardText">
                {shortText(toText(post.description), 0, 300)}
              </p>
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
    <BlogContainer id="blogs">
    <Navbar />
        {blogs.isLoading ? "Loading..." : allBlogs()}
      </BlogContainer>
    </>
  );
};

export default Blogs;
//holds the medium blogs and fetches the data
