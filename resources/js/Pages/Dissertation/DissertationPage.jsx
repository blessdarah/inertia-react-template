import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import { FORM_MODE } from "../../components/constants";
import SchoolForm from "../../components/dissertation/SchoolForm";
import AppShell from "../../layouts/app-shell";

const DissertationPage = ({ dissertation }) => {
    return (
        <Row>
            <Col md={16} offset={4}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: "1rem 0",
                    }}
                >
                    <h3>Edit dissertation</h3>
                    <Button icon={<ArrowLeftOutlined />}>back</Button>
                </div>
                <SchoolForm dissertation={dissertation} mode={FORM_MODE.EDIT} />
            </Col>
        </Row>
    );
};

DissertationPage.layout = (page) => <AppShell children={page} />;
export default DissertationPage;
