import React from 'react';
import postIndex from "../content/postIndex.json";
import { Link } from "react-router-dom";
//import { Splide, SplideSlide } from '@splidejs/react-splide';
//import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

class Post {
  constructor(id, title, category, thumbnail, tags) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.thumbnail = thumbnail;
    this.tags = tags;
  }

  getTags() {
    return this.tags;
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
  /*
  const listItems = posts.map((post, index) =>
    <SplideSlide className="article" key={index}>
      <Link to={'/' + post.id} className="article-link">
        <img src={require('../' + post.thumbnail)} alt={post.title} />
        <span className="title">{post.title}</span><br/>
        <span className="tags">{post.tags.toString()}</span>
      </Link>
    </SplideSlide>
  );
  return <Splide className="articlesWrap">{listItems}</Splide>;
  */
  const listItems = posts.map((post, index) =>
    <article className="post" key={index}>
      <Link to={'/' + post.id} className="post-link">
        <img src={require('../' + post.thumbnail)} alt={post.title} />
        <span className="title">{post.title}</span>

        <div className="tags">
          {post.tags.map(tag => (
            <span className="tag">{tag} <br/></span>
          ))}
        </div>
      </Link>
    </article>
  );
  return <div className="post-list">{listItems}</div>
}

//<img src={require(post.thumbnail + "")} alt={post.title} />
//<img src={require("../content/thumbnails/1.png")} alt={post.title} />
//../content/thumbnails/1.png