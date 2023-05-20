import React from "react";
import { Link } from "react-router-dom";
import './blog.css';
import BlogHeader from "./header";
import Navigation from "./Navbar";

const Blog = () => {
  return (
    <div className="blog">
      <BlogHeader />
      <div className="bodyContent">body</div>
    </div>
  )
}

export default Blog;