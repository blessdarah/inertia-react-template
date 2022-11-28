import { Col, Layout, Row } from 'antd'
import { Header, Content } from 'antd/es/layout/layout'
import React from 'react'
import { AppModalProvider } from '../hooks/app-modal'

const AppShell = ({children}) => {

    return (
        <AppModalProvider>
        <Layout theme="light">
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
        </Layout>

        </AppModalProvider>
    )
}

export default AppShell
