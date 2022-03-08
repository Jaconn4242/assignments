import React from "react"

function BlogPost(props) {
    return(
        <div className="BlogPost--main-container">
            <h2>{props.item.title}</h2>
            <h3>{props.item.subTitle}</h3>
            <span className="span1">Posted by </span><a href="www.google.com">{props.item.author}</a><span>{` on ${props.item.date}`}</span>
        </div>
    )
}

export default BlogPost;