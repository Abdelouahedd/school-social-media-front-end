import React, { useEffect, useState } from 'react'
import { Card, List } from 'antd'

const { Meta } = Card

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
]

const LeftSideBar = (props) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const info = JSON.parse(window.localStorage.getItem('info'))
    setUser(info.user)
    setLoading(false)
  }, [])

  return loading ? (
    <div>loading</div>
  ) : (
    <div>
      <Card
        className="mt-3"
        hoverable
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta
          title={`${user.email}`}
          description={
            <div>
              <p>Nom: {user.lastName}</p>
              <p>Prenom: {user.firstName}</p>
              <p>Role : {user.roles}</p>
              <p>Creation: {user.createdDate}</p>
              <p>anneé : 2020/2021</p>
            </div>
          }
        />
      </Card>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              /*   avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}*/
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design "
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default LeftSideBar
