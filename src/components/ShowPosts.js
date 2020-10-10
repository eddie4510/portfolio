import React from 'react';
import postIndex from "../content/postIndex.json";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

class Post {
  constructor(id, title, category, thumbnail, tags) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.thumbnail = thumbnail;
    this.tags=tags;
  }
}

export default function ShowPosts(props) {
  function getPostsByCategory(category) {
    let posts = [];
    for (let i = 0; i < postIndex.posts.length; i++) {
      if (postIndex.posts[i]["category"] === category) {
        let newPost = new Post(
          postIndex.posts[i]["id"],
          postIndex.posts[i]["title"],
          postIndex.posts[i]["category"],
          postIndex.posts[i]["thumbnail"],
          postIndex.posts[i]["tags"]);
        posts.push(newPost);
      }
    }
    return posts;
  }
  const posts = getPostsByCategory(props.category);
  const listItems = posts.map((post, index) =>
    <SplideSlide className="article" key={index}>
      <Link to={'/' + post.id} className="article-link">
        <img src={require('../' + post.thumbnail)} alt={post.title} />
        <span className="title">{post.title}</span><br/><br/>
        <span className="tags">{post.tags.toString()}</span>
      </Link>
    </SplideSlide>
  );
  return <Splide className="articlesWrap">{listItems}</Splide>;
}

//<img src={require(post.thumbnail + "")} alt={post.title} />
//<img src={require("../content/thumbnails/1.png")} alt={post.title} />
//../content/thumbnails/1.png