import React, { useState } from 'react'
import { Tag } from 'antd'
import CommentUI from '../CommentCard/CommentUI'

const Post = ({ post }) => {
  const [editOption, setEditOption] = useState(false)
  const [like, setLike] = useState(true)

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
              <li>
                <a href="edit" title="">
                  Edit Post
                </a>
              </li>
              <li>
                <a href="delete" title="">
                  delete Post
                </a>
              </li>
              <li>
                <a href="Hide" title="">
                  Hide
                </a>
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
        <Tag color="magenta">{post.group.name}</Tag>
        <Tag color="yellow">{post.user.roles}</Tag>
      </div>
      {/*Footer card POst*/}
      <div className="card-footer bg-white border-1 p-0">
        <div className="d-flex justify-content-between align-items-center my-1">
          <div className="col" onClick={() => setLike(!like)}>
            <button type="button" className="btn btn-fbook btn-block btn-sm">
              Aimer
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-fbook btn-block btn-sm">
              <i className="fa fa-comment-o" aria-hidden="true" />
              Commenter
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-fbook btn-block btn-sm">
              <i className="fa fa-share" aria-hidden="true" /> Partager
            </button>
          </div>
        </div>
      </div>
      <hr />
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
