import React from 'react';
import {Card, List} from 'antd';

const {Meta} = Card;


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
];

function LeftSideBar(props) {
    return (
        <>
            <Card
                className="mt-3"
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
            >
                <Meta
                    title="Europe Street beat"
                    description={
                        <ul>
                            <li>status : Etudaint</li>
                            <li>email : email@gmail.com</li>
                            <li>class : GI 5 éme</li>
                            <li>anneé : 2021</li>
                        </ul>
                    }
                />
            </Card>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            /*   avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}*/
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design "
                        />
                    </List.Item>
                )}
            />
        </>
    );
}

export default LeftSideBar;