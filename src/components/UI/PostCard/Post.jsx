import React, {useState} from 'react';
import {Tag} from 'antd';
import CommentUI from "../CommentCard/CommentUI";

function Post(props) {


    const [post, setPost] = useState({});
    const [editOption, setEditOption] = useState(false);
    const [showComments, setShowComments] = useState(true);
    const [like, setLike] = useState(true);

    return (
        <div className="card gedf-card">

            {/*Header of card */}
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="mr-2">
                            <img className="avatar rounded-circle" width="45"
                                 src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                 alt="user_img"/>
                        </div>
                        <div className="ml-2">
                            <a to={`/profile/`}>
                                <div className="h5 m-0">
                                    Ennouri
                                </div>
                            </a>
                            <div className="h7 text-muted">Miracles Lee Cross</div>
                        </div>
                    </div>
                    {/*Modal to show option for the post*/}
                    <div className="ed-opts">
                        <p className="ed-opts-open" style={{cursor: "pointer"}}
                           onClick={() => setEditOption(!editOption)}
                        >
                            <i className="fa fa-ellipsis-v"></i>
                        </p>
                        <ul className={editOption ? "ed-options active" : "ed-options"}>
                            <li><a href="edit" title="">Edit Post</a></li>
                            <li><a href="delete" title="">delete Post</a></li>
                            <li><a href="Hide" title="">Hide</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*Body card POst*/}
            <div className="card-body">
                <div className="text-muted h7 ">
                    <i className="fa fa-clock-o" style={{marginRight: "2px"}}/>{}
                </div>
                <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam dolor dolorum est fuga hic
                    ipsa laborum maiores nemo neque nisi quis, veniam voluptate. Blanditiis distinctio ex harum illum
                    praesentium.
                </p>
                <Tag color="magenta">#magenta</Tag>
                <Tag color="yellow">#magenta</Tag>
                <Tag color="red">#magenta</Tag>
            </div>
            {/*Footer card POst*/}
            <div className="card-footer bg-white border-1 p-0">
                <div
                    className="d-flex justify-content-between align-items-center my-1">
                    <div className="col" onClick={() => setLike(!like)}>
                        <button type="button" className="btn btn-fbook btn-block btn-sm">
                            <i className={like ? "fa fa-heart" : "fa fa-heart-o"} aria-hidden="true"/>
                            Like
                        </button>
                    </div>
                    <div className="col" onClick={() => setShowComments(!showComments)}>
                        <button type="button" className="btn btn-fbook btn-block btn-sm">
                            <i className="fa fa-comment-o" aria-hidden="true"/>
                            Commente
                        </button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-fbook btn-block btn-sm">
                            <i className="fa fa-share" aria-hidden="true"/> Share
                        </button>
                    </div>
                </div>
            </div>
            <hr/>
            {
                showComments ?
                    <>
                        <CommentUI/>
                        <CommentUI>
                            <CommentUI/>
                            <CommentUI/>
                        </CommentUI>
                    </>
                    : null
            }
        </div>
    );
}

export default Post;