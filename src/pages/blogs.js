import React from "react";
import BlogData from "../components/BlogData";
import BlogForm from "../components/BlogForm";
import "../styles/blogs.scss";

const Blogs = () => {
  return (
    <div class="page">
      <div class="">
        <div class="header">
        <BlogForm />
          <h2>Blogs</h2>
          <BlogData />
        </div>
        
      </div>
    </div>
  );
};

export default Blogs;
