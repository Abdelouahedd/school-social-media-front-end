import React from 'react'
import { Layout } from 'antd'
import LeftSideBar from '../shared/Side-bar/LeftSideBar.jsx'
import RightSideBar from '../shared/Side-bar/RightSideBar'
import Main from '../mainSection/Main'

export default function Home() {
  return (
    <Layout>
      <Layout>
        <Layout className="site-layout">
          <Layout.Content className="container-fluid">
            <div className="site-layout-background" style={{ padding: 24 }}>
              <div className="container">
                <div className="row">
                  {/*Left Side bar component*/}
                  <div className="col-3 border border-2">
                    <LeftSideBar />
                  </div>
                  {/*Left Side bar component*/}

                  {/*Main component*/}
                  <Main />
                  {/*Main component*/}

                  {/*Right Side bar component*/}
                  <div className="col-3 border border-2">
                    <RightSideBar />
                  </div>
                  {/*Right Side bar component*/}
                </div>
              </div>
            </div>
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>
            ENSA @2021
          </Layout.Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}
