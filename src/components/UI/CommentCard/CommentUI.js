import React from 'react'
import { Avatar, Comment } from 'antd'

const CommentUI = ({ comment }) => (
  <Comment
    className="mx-2 px-2"
    actions={[<span key="comment-nested-reply-to">Repondre</span>]}
    author={<a>{comment.user.lastName}</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={<p>{comment.content}</p>}
  >
  </Comment>
)

export default CommentUI
