import React, { useState, useEffect } from "react";
import axios from "axios";
import { css } from "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About"


function App() {
  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@agreen17";
  const [profile, setProfile] = useState({
    ptitle: "",
    name: "Akiko Green",
    avatar: "",
    profileUrl: "",
  });

  const [blogs, setBlogs] = useState({
    items: [],
    isLoading: true,
    erorr: null,
  });

  useEffect(() => {
    const fetchBlogs = () => {
      axios
        .get(mediumURL)
        .then((res) => {
          const userAvatar = res.data.feed.image;
          const title = res.data.feed.title;
          const link = res.data.feed.url;
          const blogs = res.data.items;
          const posts = blogs.filter((post) => post.categories.length > 0);
          setProfile((p) => ({
            ...p,
            ptitle: title,
            profileUrl: link,
            avatar: userAvatar,
          }));
          setBlogs({ items: posts, isLoading: false });
        })
        .catch((error) => {
          console.log(error.message);
          setBlogs({ error: error.message });
        });
    };
    fetchBlogs();
  }, [mediumURL]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home blogs={blogs} profile={profile} />} />
        <Route path="/about" element={<About />}/>
        </Routes>
    </>
  );
}

export default App;
