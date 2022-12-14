import React from 'react'
import { Header, Content } from 'antd/es/layout/layout'
import { Col, Layout, Row } from 'antd'

const LayoutContent = ({children}) => {
    return (
        <>
            <Header>header</Header>
            <Layout>
               <Content style={{background: '#fff', overflowX:'hidden'}}>
                    <Row gutter={[16, 16]}>
                        <Col md={20} offset={2}>
                            {children}
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </>
    )
}

export default LayoutContent
