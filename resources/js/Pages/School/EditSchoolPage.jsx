import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import { FORM_MODE } from "../../components/constants";
import SchoolForm from "../../components/school/SchoolForm";
import AppShell from "../../layouts/app-shell";

const EditSchoolPage = ({ school }) => {
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
                    <h3>Edit school</h3>
                    <Button icon={<ArrowLeftOutlined />}>back</Button>
                </div>
                <SchoolForm school={school} mode={FORM_MODE.EDIT} />
            </Col>
        </Row>
    );
};

EditSchoolPage.layout = (page) => <AppShell children={page} />;
export default EditSchoolPage;
