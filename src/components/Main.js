import React, {useState} from 'react';
import {Card, Layout, Menu, Avatar} from 'antd';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
    EditOutlined, EllipsisOutlined, SettingOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";
import moment from "moment";

const {Header, Content, Footer, Sider} = Layout;
const {Meta} = Card;

function Main(props) {
    const {REACT_APP_URL} = process.env;

    // const post = props;
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    //State
    const [post, setPost] = useState(props);
    const [editOption, setEditOption] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [like, setLike] = useState();
    const [show, setShow] = useState(false);

    return (
        <Layout>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <div className="logo my-4"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1" icon={<UserOutlined/>}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined/>}>
                        nav 3
                    </Menu.Item>
                    <Menu.Item key="4" icon={<BarChartOutlined/>}>
                        nav 4
                    </Menu.Item>
                    <Menu.Item key="5" icon={<CloudOutlined/>}>
                        nav 5
                    </Menu.Item>
                    <Menu.Item key="6" icon={<AppstoreOutlined/>}>
                        nav 6
                    </Menu.Item>
                    <Menu.Item key="7" icon={<TeamOutlined/>}>
                        nav 7
                    </Menu.Item>
                    <Menu.Item key="8" icon={<ShopOutlined/>}>
                        nav 8
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{marginLeft: 200}}>
                <Header className="site-layout-background" style={{padding: 0}}/>
                <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                    <div className="site-layout-background" style={{padding: 24, textAlign: 'center'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-3 border border-2">
                                    left side
                                </div>
                                <div className="col-6 border border-2">
                                    <div className="central-meta new-pst">
                                        <div className="new-postbox">
                                            <figure>
                                                <img src={`${REACT_APP_URL}images/resources/admin2.jpg`}
                                                     alt=""/>
                                            </figure>
                                            <div className="newpst-input">
                                                <form method="post">
                                                    <textarea rows="2" placeholder="write something"></textarea>
                                                    <div className="attachments">
                                                        <ul>
                                                            <li>
                                                                <i className="fa fa-music"></i>
                                                                <label className="fileContainer">
                                                                    <input type="file"/>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-image"></i>
                                                                <label className="fileContainer">
                                                                    <input type="file"/>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-video-camera"></i>
                                                                <label className="fileContainer">
                                                                    <input type="file"/>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-camera"></i>
                                                                <label className="fileContainer">
                                                                    <input type="file"/>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <button type="submit">Post</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>


                                    {/*-------*/}

                                    <div className="card gedf-card">
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
                                                        {/*<div className="h7 text-muted">Miracles Lee Cross</div>*/}
                                                    </div>
                                                </div>
                                                <div className="ed-opts">
                                                    <p className="ed-opts-open" style={{cursor: "pointer"}}
                                                       onClick={() => setEditOption(!editOption)}
                                                    >
                                                        <i className="la la-ellipsis-v"/>
                                                    </p>
                                                    <ul className={editOption ? "ed-options active" : "ed-options"}>
                                                        <li><a href="edit" title="">Edit Post</a></li>
                                                        <li><a href="delete" title="">delete Post</a></li>
                                                        <li><a href="Hide" title="">Hide</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="text-muted h7 mb-2">
                                                <i className="fa fa-clock-o" style={{marginRight: "2px"}}/>{}
                                            </div>
                                            <p className="card-text">
                                                Hello world
                                            </p>
                                        </div>
                                        <div className="card-footer bg-white border-1 p-0">
                                            <div className="d-flex justify-content-between align-items-center my-1">
                                                <div className="col">
                                                    <button type="button" className="btn btn-fbook btn-block btn-sm"
                                                    ><i
                                                        className={like ? "fa fa-heart" : "fa fa-heart-o"}
                                                        aria-hidden="true"/> Like
                                                    </button>
                                                </div>
                                                <div className="col">
                                                    <button type="button" className="btn btn-fbook btn-block btn-sm"><i
                                                        className="fa fa-comment-o"
                                                        aria-hidden="true"/> Commente
                                                    </button>
                                                </div>
                                                <div className="col">
                                                    <button type="button" className="btn btn-fbook btn-block btn-sm">
                                                        <i className="fa fa-share" aria-hidden="true"/> Share
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/*-------*/}


                                </div>
                                <div className="col-3 border border-2">
                                    right side
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default Main;