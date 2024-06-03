// import React, { useState, useEffect } from "react";

// const FetchPHP = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("http://www.bartontechgroup.com/config/blogdb.php")
//       .then((response) => response.text())
//       .then((data) => {
//         setData(data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []); // <-- run the effect once, on component mount

//   return (
//     <div>
//       <h2>PHP Response:</h2>
//       {/* {data && <div>{data}</div>} */}
//       {data && <div dangerouslySetInnerHTML={{ __html: data }} />}
//     </div>
//   );
// };

import React from "react";
import blogData from "../../assets/data/blogData.json";
import "./blogdata.scss";

const BlogData = () => {
  return (
    <div className="blog-list">
      <h3>Recent Blog Posts</h3>
      {blogData.map((post, index) => (
        <div key={index} className="blog-post">
          <h4>{post.title}</h4>
          <p>{post.content}</p>
          <p>By: {post.author}</p>
          <p>Date: {post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogData;


// export default FetchPHP;
