import React, { useState, useEffect } from 'react'
import { Button, Input, Modal, Upload, Empty, Spin } from 'antd'
import Post from '../UI/PostCard/Post'
import { UploadOutlined } from '@ant-design/icons'
import axios from 'axios'

const { TextArea } = Input

const Main = () => {
  const [files, setFiles] = useState([])
  const [visible, setVisible] = React.useState(false)
  const [post, setPost] = useState()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState('')

  //function to handle Modal
  const handleOk = () => setTimeout(() => setVisible(false), 2000)
  const handleCancel = () => setVisible(false)
  const showModal = () => setVisible(true)

  //configuration for upload files
  const uploadSettings = {
    onRemove: (file) => {
      const index = files.indexOf(file)
      const newFileList = files.slice()
      newFileList.splice(index, 1)
      setFiles(newFileList)
      return {
        fileList: newFileList,
      }
    },
    beforeUpload: (file) => {
      setFiles([...files, file])
      return false
    },
    files,
  }

  useEffect(() => {
    const info = JSON.parse(window.localStorage.getItem('info'))
    console.log(info)
    setToken(info.token)

    axios
      .get('http://localhost:3000/api/v1/posts', {
        headers: {
          Authorization: `Bearer ${info.token}`,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data)
        data.sort((a, b) => a.lastModifiedDate <= b.lastModifiedDate)
        setPosts(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const publishPost = (content) => {
    axios({
      method: 'POST',
      baseURL: 'http://localhost:3000/api/v1/posts',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { content },
    })
      .then((res) => {
        console.log({ result: res.data })
        setPosts([res.data, ...posts])
        setVisible(false)
      })
      .catch((err) => console.error(err))
  }

  return (
    <>
      <section className="col-6 border border-2">
        {/*Section for adding new POst*/}
        <div className="card-header my-2 bg-secondary">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <img
                className="avatar rounded-circle"
                width="45"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="user_img"
              />
              <div className="ml-3">
                <input disabled type="text" className="form-control mw-90" />
              </div>
              <div className="ml-3">
                <Button
                  type="submit"
                  className="btn btn-secondary"
                  onClick={showModal}
                >
                  Create post
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/*END Section for adding new POst*/}

        {/*List of Post*/}
        {loading ? (
          <div>
            <Spin />
          </div>
        ) : (
          <div>
            {posts && posts.length !== 0 ? (
              <div>
                {posts.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <Empty />
            )}
          </div>
        )}
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
          <TextArea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            showCount
            maxLength={100}
            rows={6}
          />
          <div className="row">
            <div className="col-lg-6">
              <Button type="primary" block onClick={(_) => publishPost(post)}>
                <span>Publier</span>
              </Button>
            </div>
            <div className="col-lg-6">
              <Upload {...uploadSettings}>
                <Button icon={<UploadOutlined />} block>
                  Uploader
                </Button>
              </Upload>
            </div>
          </div>
        </div>
      </Modal>
      {/*Modal to add Post*/}
    </>
  )
}

export default Main
