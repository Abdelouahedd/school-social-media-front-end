import React from 'react';
import {Avatar, Comment} from "antd";


const CommentUI = ({children}) => (
    <Comment
        className="mx-2 px-2"
        actions={[<span key="comment-nested-reply-to">Reply to</span>]}
        author={<a>Han Solo</a>}
        avatar={
            <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
            />
        }
        content={
            <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure).
            </p>
        }
    >
        {children}
    </Comment>
)

export default CommentUI;