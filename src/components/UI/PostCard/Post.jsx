import React, { useState } from 'react'
import { Tag, Input } from 'antd'
import CommentUI from '../CommentCard/CommentUI'

const Post = ({ post, onDelete, onHide, onComment }) => {
  const [editOption, setEditOption] = useState(false)
  const [comment, setComment] = useState('')
  const [toggleComment, setToggleComment] = useState(false)
  return (
    <div className="card gedf-card">
      {/*Header of card */}
      <div className="card-header">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <div className="mr-2">
              <img
                className="avatar rounded-circle"
                width="45"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="user_img"
              />
            </div>
            <div className="ml-2">
              <a to={`/profile/`}>
                <div className="h5 m-0">
                  {post.user.firstName} {post.user.lastName}
                </div>
              </a>
              <div className="h7 text-muted">{post.user.email}</div>
            </div>
          </div>
          {/*Modal to show option for the post*/}
          <div className="ed-opts">
            <p
              className="ed-opts-open"
              style={{ cursor: 'pointer' }}
              onClick={() => setEditOption(!editOption)}
            >
              <i className="fa fa-ellipsis-v"></i>
            </p>
            <ul className={editOption ? 'ed-options active' : 'ed-options'}>
              <li
                style={{
                  cursor: 'pointer',
                }}
                onClick={onDelete}
              >
                <p>Supprimer</p>
              </li>
              <li
                style={{
                  cursor: 'pointer',
                }}
                onClick={onHide}
              >
                <p>Hide</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*Body card POst*/}
      <div className="card-body">
        <div className="text-muted h7 ">
          <i className="fa fa-clock-o" style={{ marginRight: '2px' }} />
          {}
        </div>
        <p className="card-text">{post.content}</p>
        <Tag color="yellow">{post.user.roles}</Tag>
      </div>
      {/*Footer card POst*/}
      <div className="card-footer bg-white border-1 p-0">
        <div className="d-flex justify-content-between align-items-center my-1">
          <div className="col">
            <button
              onClick={(_) => {
                const foo = toggleComment
                console.log(foo)
                setToggleComment(!foo)
              }}
              type="button"
              className="btn btn-fbook btn-block btn-sm"
            >
              <i className="fa fa-comment-o" aria-hidden="true" />
              Commenter
            </button>
          </div>
        </div>
      </div>
      <hr />
      <Input
        style={{ visibility: toggleComment ? 'visible' : 'hidden' }}
        placeholder="Commenter ici"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter' || e.keyCode === 13) {
            onComment(comment, post)
            setComment('')
            setToggleComment(!toggleComment)
          }
        }}
      />
      {post.comments && post.comments.length !== 0 && (
        <div>
          {post.comments.map((comment) => (
            <CommentUI comment={comment} key={comment.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Post
