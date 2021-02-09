import React, {useState} from 'react';
import {Button, Input, Modal, Upload} from 'antd';
import Post from "../UI/PostCard/Post";
import {UploadOutlined} from "@ant-design/icons";

const {TextArea} = Input;

function Main() {
    const [files, setFiles] = useState([]);
    const [visible, setVisible] = React.useState(false);


    //function to handle Modal
    const handleOk = () => setTimeout(() => setVisible(false), 2000);
    const handleCancel = () => setVisible(false);
    const showModal = () => setVisible(true);

    //configuration for upload files
    const uploadSettings = {
        onRemove: file => {
            const index = files.indexOf(file);
            const newFileList = files.slice();
            newFileList.splice(index, 1);
            setFiles(newFileList);
            return {
                fileList: newFileList,
            };
        },
        beforeUpload: file => {
            setFiles([...files, file]);
            return false;
        },
        files,
    };

    return (
        <>
            <section className="col-6 border border-2">
                {/*Section for adding new POst*/}
                <div className="card-header my-2 bg-secondary">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between align-items-center">
                            <img className="avatar rounded-circle" width="45"
                                 src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                 alt="user_img"/>
                            <div className="ml-3">
                                <input disabled type="text" className="form-control mw-90"/>
                            </div>
                            <div className="ml-3">
                                <Button type="submit" className="btn btn-secondary"
                                        onClick={showModal}>
                                    Create post
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*END Section for adding new POst*/}

                {/*List of Post*/}
                <div>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
                {/*List of Post*/}

            </section>
            {/*Modal to add Post*/}
            <Modal
                title="Ajouter un post"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div className="container">
                    <TextArea showCount maxLength={100} rows={6}/>
                    <div className="row">
                        <div className="col-lg-6">
                            <Button type="primary" block>
                                <span>Add post</span>
                            </Button>
                        </div>
                        <div className="col-lg-6">
                            <Upload {...uploadSettings}>
                                <Button icon={<UploadOutlined/>} block>Click to Upload</Button>
                            </Upload>
                        </div>
                    </div>
                </div>
            </Modal>
            {/*Modal to add Post*/}
        </>


    );
}

export default Main;