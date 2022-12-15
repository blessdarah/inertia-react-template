import React from "react";
import { Header, Content } from "antd/es/layout/layout";
import { Col, Layout, Row } from "antd";

const LayoutContent = ({ children }) => {
    return (
        <>
            <Header
                style={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <h3>UBaETD</h3>
                <ul
                    style={{
                        listStyle: "none",
                        margin: 0,
                        display: "inline-flex",
                        gap: "30px",
                    }}
                >
                    <li>
                        <a href="/schools">Schools</a>
                    </li>
                    <li>
                        <a href="/book-requests">Book request</a>
                    </li>
                    <li>
                        <a href="/departments">Departments</a>
                    </li>
                    <li>
                        <a href="/dissertations">Dissertations</a>
                    </li>
                </ul>
            </Header>
            <Layout>
                <Content style={{ background: "#fff", overflowX: "hidden" }}>
                    <Row gutter={[16, 16]}>
                        <Col md={20} offset={2}>
                            {children}
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </>
    );
};

export default LayoutContent;
