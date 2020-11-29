import React from 'react';
import ReactMarkdown from 'react-markdown';

import post0 from "../content/posts/post0.md";
import post1 from "../content/posts/post1.md";
import post2 from "../content/posts/post2.md";
import post3 from "../content/posts/post3.md";
import post4 from "../content/posts/post4.md";
import post5 from "../content/posts/post5.md";
import postN from "../content/posts/postN.md";

export default function Post(props) {
    let id = props.id;
    function showPost(post) {
        return <div className="content">
            <ReactMarkdown source={post} escapeHtml={false} />
        </div>;
    }

    switch (id) {
        case "0":
            return showPost(post0);
        case "1":
            return showPost(post1);
        case "2":
            return showPost(post2);
        case "3":
            return showPost(post3);
        case "4":
            return showPost(post4);
        case "5":
            return showPost(post5);
        default:
            return showPost(postN);
    }


}
