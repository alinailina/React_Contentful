import React from "react";

//import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const Post = ({ post }) => {
  console.log(post);
  const {
    title,
    publishDate,
    heroImage,
    body,
    description,
    tags,
  } = post.fields;
  
  console.log(heroImage);
  return (
    <div>
      <h3>{title}</h3>
      <p>{publishDate}</p>
      <p>{body}</p>
      <p>{tags}</p>
    </div>
  );
};

export default Post;
