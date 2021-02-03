import React from "react";
import allBlogs from "../Components/allBlogs";
import Tittle from "../Components/Tittle";

function BlogsPage() {
  return (
    <div>
      <div className="b-title">
        <Tittle title={"Wspomnienia"} span={"świadków"} />
      </div>
      <div className="BlogsPage">
        {allBlogs.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img src={blog.image} alt="fotka" />
                <a href={blog.link} className="blog-link" target="_blink">
                  {blog.title}
                </a>
                <br />
                {blog.date}
                {blog.month}
                {blog.year}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogsPage;
