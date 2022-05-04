import React from "react";

const Blogs = ({blogs, profile}) => {
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
      return blogs.items && blogs.items.map((post, index) => (
        <div className="whole-card" key={index}>
          <div className="card-image" style={{ width: "10vw" }}>
            <img
              src={post.thumbnail}
              className="blog__topImg"
              alt="thumbnail"
            ></img>
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
            <h5 className="card-title">
              <a
                href={post.link}
                className="postTitle"
                rel="noreferrer"
                target="_blank"
              >
                {shortText(post.title, 0, 80)}
              </a>
            </h5>
            <p className="cardText">
              {shortText(toText(post.description), 0, 300)}
            </p>
          </div>
        </div>
      ));
    }
  }
  allBlogs();

  console.log(blogs.items);
  return (
    <div className="blog-container">
    <div className="blogs-container"></div>
    {blogs.isLoading ? 'Loading...' : allBlogs()}
</div>
  );
};

export default Blogs;
//holds the medium blogs and fetches the data
